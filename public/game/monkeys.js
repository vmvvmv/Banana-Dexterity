function Monkeys(game) {

  this.group = game.add.physicsGroup();
  var y = 80;
  for (var i = 0; i < 3; i++) {
    var monkey = this.group.create(game.world.randomX, y, 'monkey');
    monkey.body.velocity.x = game.rnd.between(100, 300);
    y += 80;
  }

}

Monkeys.prototype.update = function(){
  function checkPos(monkey) {
    if (monkey.x > 800) {
      monkey.x = -100;
      monkey.loadTexture('player');
    }
  }
  this.group.forEach(checkPos);
}

Monkeys.prototype.getGroup = function(){
  return this.group;
}