function ScoreBar(game){
  this.scoreText = game.add.text(16, 120, 'Score: 0', { fontSize: '32px', fill: '#000' });
  game.add.sprite(16, 16, 'scoreHud');

  game.updageScore = (function(){
      game.gameState.score ++;
      this.scoreText.text = 'Score: ' + game.gameState.score;
  }).bind(this);

  this.reset = function(){
    this.scoreText.text = 'Score: ' + game.gameState.score;
  }
}