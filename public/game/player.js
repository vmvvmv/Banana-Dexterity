function Player(game, cursors) {

  this.velocity = 350;
  this.sprite = game.add.sprite(450, 500, 'player');
  this.sprite.anchor.set(0.5);
  game.physics.arcade.enable(this.sprite);
}
Player.prototype.getSprite = function () {
  return this.sprite;
}
Player.prototype.update = function () {

  if (cursors.left.isDown) {
    this.sprite.x = 315;
    this.sprite.scale.x = 1;
  } else if (cursors.right.isDown) {
    this.sprite.x = 485;
    this.sprite.scale.x = -1;
  }

}