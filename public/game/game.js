function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = '#2d2d2d';
    // game.add.sprite(0, 0, 'background');
    setStartState();

    scoreBar = new ScoreBar(game);
    player = new Player(game, cursors);
    monkeys = new Monkeys(game);
    progressBar = new ProgressBar(game);

    showInfoBar("press [space] to begin, [left][right] for controll");

    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    fireButton.onDown.add(function () {
        if (!game.gameState.isPlaying) {
            game.gameState.isPlaying = true;
            monkeys.spawnFirstWave();
            bar.destroy();
            textbar.destroy();
        }
    }, this);

}

function showInfoBar(text){
    bar = game.add.graphics();
    bar.beginFill(0x000000, 0.2);
    bar.drawRect(0, 200, 800, 100);
    style = {
        font: "bold 32px Arial",
        fill: "#fff",
        boundsAlignH: "center",
        boundsAlignV: "middle"
    };
    textbar = game.add.text(0, 0, text, style);
    textbar.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    textbar.setTextBounds(0, 200, 800, 100);
}


function updateLevel() {

    if (monkeys.fallenMonkey > game.gameState.fallenMonkey) {

        game.gameState.fallenMonkey = monkeys.fallenMonkey;
        game.gameState.score++;
        scoreBar.updageScore(game.gameState.score);

    }

    let progreesPercent = (game.gameState.score - game.gameState.prevLevelScores) / (game.gameState.scoresToNextLevel - game.gameState.prevLevelScores);
    progressBar.updateProgress(progreesPercent);

    if (game.gameState.lastCheckedScores === game.gameState.score) return;

    if (game.gameState.score === game.gameState.scoresToNextLevel) {

        game.gameState.level++;
        progressBar.setLvl(game.gameState.level);

        game.gameState.prevLevelScores = game.gameState.scoresToNextLevel;
        game.gameState.scoresToNextLevel = game.gameState.scoresToNextLevel + game.gameState.level * 2;
        monkeys.upragadeVelocity();
        game.gameState.lastCheckedScores = game.gameState.score;

    }
}

function update() {

    if (game.gameState.isPlaying) {
        updateLevel();
        monkeys.update();
        game.physics.arcade.overlap(player.getSprite(), monkeys.getGroup(), collisionHandler, null, this);
        player.update();
    }

}

function setStartState() {
    game.gameState = {
        isPlaying: false,
        level: 1,
        scoresToNextLevel: 6,
        score: 0,
        prevLevelScores: 0,
        lastCheckedScores: 0,
        fallenMonkey: 0
    }
}

function resetGame() {

    setStartState();
    monkeys.reset();
    progressBar.reset();
    scoreBar.reset();

}

function collisionHandler(player, monkey) {

    let finishScore = game.gameState.score;
    showInfoBar("your result:"+finishScore+" press [space] to retry");

    monkeys.getGroup().destroy();
    resetGame();

}



var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    create: create,
    update: update,
    preload: preload
});