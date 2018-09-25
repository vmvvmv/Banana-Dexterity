

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = '#2d2d2d';
    // game.add.sprite(0, 0, 'background');
    game.gameState = {
        isPlaying:false,
        level:1,
        scoresToNextLevel: 6,
        score:0,
        prevLevelScores:0,
        lastCheckedScores:0,
        fallenMonkey:0
    }

    scoreBar = new ScoreBar(game);
    player = new Player(game, cursors);
    monkeys = new Monkeys(game);
    monkeys.spawnFirstWave();
    progressBar = new ProgressBar(game);

    game.gameState.isPlaying = true;

}

function updateLevel(){
    if(monkeys.fallenMonkey > game.gameState.fallenMonkey){

        game.gameState.fallenMonkey = monkeys.fallenMonkey;
        game.gameState.score ++;
        scoreBar.updageScore( game.gameState.score);
        let progreesPercent = (game.gameState.score - game.gameState.prevLevelScores) / (game.gameState.scoresToNextLevel - game.gameState.prevLevelScores);
        progressBar.updateProgress(progreesPercent);

    }

    if(game.gameState.lastCheckedScores === game.gameState.score ) return;

    if(game.gameState.score === game.gameState.scoresToNextLevel){

        game.gameState.level++;
        progressBar.setLvl(game.gameState.level);

        game.gameState.prevLevelScores = game.gameState.scoresToNextLevel;
        game.gameState.scoresToNextLevel = game.gameState.scoresToNextLevel+ game.gameState.level * 4;
        monkeys.upragadeVelocity();
        game.gameState.lastCheckedScores = game.gameState.score;

    }
}

function update() {

    if(game.gameState.isPlaying){
        updateLevel();
        monkeys.update();
        game.physics.arcade.overlap(player.getSprite(), monkeys.getGroup(), collisionHandler, null, this);
        player.update();
    }

}

function resetGame(){

    game.gameState = {
        isPlaying:true,
        level:1,
        scoresToNextLevel: 6,
        score:0,
        prevLevelScores:0,
        lastCheckedScores:0,
        fallenMonkey:0
    }
    monkeys.reset();
    progressBar.reset();
    scoreBar.reset();

}

function collisionHandler (player, monkey) {

    resetGame();
    
}



var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update, preload: preload });
