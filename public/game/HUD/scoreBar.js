function ScoreBar(game) {

  this.scoreText = game.add.text(16, 120, 'Score: 0', {
    fontSize: '32px',
    fill: '#000'
  });
  
  game.add.sprite(16, 16, 'scoreHud');

  this.updageScore = function (score) {

    this.scoreText.text = 'Score: ' + score;

  }

  this.reset = function () {

    this.scoreText.text = 'Score: 0';

  }

}