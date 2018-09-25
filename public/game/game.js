function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = '#2d2d2d';
    game.add.sprite(0, 0, 'background');


    score = 0;
    scoreText = game.add.text(16, 120, 'Score: 0', { fontSize: '32px', fill: '#000' });
    game.add.sprite(16, 16, 'scoreHud');

    game.updageScore = function(){
        score ++;
        scoreText.text = 'Score: ' + score;
    }

    player = new Player(game, cursors);
    monkeys = new Monkeys(game);
    progressBar = new ProgressBar(game);
    progressBar.updateProgress();
}

function update(a,delta) {
    monkeys.update();
    game.physics.arcade.overlap(player.getSprite(), monkeys.getGroup(), collisionHandler, null, this);
    player.update();
}


function collisionHandler (player, monkey) {
    console.log('hit');
}





var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update, preload: preload });
