function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = '#2d2d2d';

    player = new Player(game, cursors);
    monkeys = new Monkeys(game);
}

function update() {
    monkeys.update();
    game.physics.arcade.overlap(player.getSprite(), monkeys.getGroup(), collisionHandler, null, this);
    player.update();
}


function collisionHandler (player, monkey) {
    player.x = 400;
    player.y = 32;
}

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update, preload: preload });
