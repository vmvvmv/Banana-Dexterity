function Player(game, cursors) {

  this.velocity = 350;
  this.sprite = game.add.sprite(400, 32, 'player');
  this.sprite.anchor.set(0.5);
  game.physics.arcade.enable(this.sprite);

}
Player.prototype.getSprite = function () {
  return this.sprite;
}
Player.prototype.update = function () {

  this.sprite.body.velocity.x = 0;
  this.sprite.body.velocity.y = 0;

  if (cursors.left.isDown) {
    this.sprite.body.velocity.x = -this.velocity;
    this.sprite.scale.x = -1;
  } else if (cursors.right.isDown) {
    this.sprite.body.velocity.x = this.velocity;
    this.sprite.scale.x = 1;
  }

  if (cursors.up.isDown) {
    this.sprite.body.velocity.y = -this.velocity;
  } else if (cursors.down.isDown) {
    this.sprite.body.velocity.y = this.velocity;
  }
  
}