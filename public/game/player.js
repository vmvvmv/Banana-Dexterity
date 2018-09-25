function Player(game, cursors) {

  this.velocity = 350;
  this.sprite = game.add.sprite(350, 500, 'player');
  this.sprite.anchor.set(0.5);
  this.width = this.sprite.width/2;
  game.physics.arcade.enable(this.sprite);
}
Player.prototype.getSprite = function () {
  return this.sprite;
}
Player.prototype.update = function () {


  if (cursors.left.isDown) {
    this.sprite.x = 350-this.width/2;
    this.sprite.scale.x = 1;
  } else if (cursors.right.isDown) {
    this.sprite.x = 450+this.width/2;
    this.sprite.scale.x = -1;
  }

}