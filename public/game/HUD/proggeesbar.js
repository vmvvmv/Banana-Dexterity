function ProgressBar(game){

  this.progress = game.add.image(400 - 157/2, 50, "proggresbaremp");
  this.progress = game.add.image(400- 157/2, 50, "proggresbarfull");
  this.Text = game.add.text(400- 157/2, 70, 'Level: 0', { fontSize: '16px', fill: '#000' });
  this.progress.width = 0;
  this.progress.initialWidth = 157 

  game.updateProgress = this.updateProgress.bind(this);

}

ProgressBar.prototype.updateProgress = function (percent) {
  this.progress.width = percent*this.progress.initialWidth;
  this.Text.text = 'Level: ' + game.gameState.level;
    // the original image width in pixels// then on updateprogress.width = percentDone*progress.initialWidth; // percentDone should be in decimals 20% = 0.2// so this will finaly result in 1 * 300 = 100%
}
ProgressBar.prototype.reset = function () {
  this.progress.width = 0*this.progress.initialWidth;
  this.Text.text = 'Level: ' + game.gameState.level;
}
