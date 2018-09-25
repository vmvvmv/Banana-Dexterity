function Monkeys(game) {

  this.group = game.add.physicsGroup();
  var x = 290;
  for (var i = 0; i < 9; i++) {
    var monkey = this.group.create(x, -600*i, 'monkey');
    monkey.body.velocity.y = 350;
    monkey.angryMode = true;
    monkey.initY = -400*i;
    x = Math.random() > 0.5? 280: 430;
  }

}

Monkeys.prototype.spawnMonkey = function(){
  var x = Math.random() > 0.5? 280: 430;
  var monkey = this.group.create(x, -600*9, 'monkey');
  monkey.body.velocity.y = 350;
}

Monkeys.prototype.update = function(){
  function checkPos(monkey) {
    if(monkey.y > 400){
      monkey.loadTexture('angryMonkey');
    }
    if (monkey.y > 600) {
      monkey.destroy();
      game.updageScore();
      this.spawnMonkey();
    }
  }
  this.group.forEach(checkPos.bind(this));
}

Monkeys.prototype.getGroup = function(){
  return this.group;
}