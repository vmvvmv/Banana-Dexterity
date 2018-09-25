function Monkeys(game) {

  this.group = game.add.physicsGroup();
  this.velocity = 450;
  this.fallenMonkey = 0;

}

Monkeys.prototype.spawnFirstWave = function () {

  var x = 280;
  for (var i = 0; i < 9; i++) {
    var monkey = this.group.create(x, -600 * i, 'monkey');
    monkey.body.velocity.y = this.velocity;
    monkey.angryMode = true;
    monkey.initY = -400 * i;
    x = Math.random() > 0.5 ? 280 : 430;
  }
  
}

Monkeys.prototype.spawnMonkey = function () {
  
  var x = Math.random() > 0.5 ? 280 : 430;
  var monkey = this.group.create(x, -600 * 9, 'monkey');
  monkey.body.velocity.y = this.velocity;

}

Monkeys.prototype.update = function () {

  function checkPos(monkey) {

    if (monkey.y > 400) {
      monkey.loadTexture('angryMonkey');
    }

    if (monkey.y > 600) {
      monkey.destroy();
      this.fallenMonkey++;
      this.spawnMonkey();
    }

  }

  this.group.forEach(checkPos.bind(this));

}

Monkeys.prototype.getGroup = function () {

  return this.group;

}

Monkeys.prototype.upragadeVelocity = function () {

  let newVelocity = this.velocity * 1.1;

  this.group.forEach(function (monkey) {
    monkey.body.velocity.y = newVelocity;
  });

  this.velocity = newVelocity;

}

Monkeys.prototype.reset = function () {

  this.group = game.add.physicsGroup();
  this.velocity = 450;
  this.fallenMonkey = 0;
  this.enableSpawn = true;

}