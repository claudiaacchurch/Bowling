const frame = require("./frame");

class ScoreBoard {
  constructor() {
    (this.score = 0), (this.frames = []);
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  scoreCurrentRoll() {
    const currentFrame = this.frames[this.frames.length - 1];
    this.score += currentFrame.knockedDownPins;
    if (currentFrame.knockedDownPins == 10 && currentFrame.roll2 == null) {
      currentFrame.isStrike = true;
    } else if (
      currentFrame.knockedDownPins == 10 &&
      currentFrame.roll2 != null
    ) {
      currentFrame.isSpare = true;
    }
  }

  checkStrikeSpareStatus() {
    const currentFrame = this.frames[this.frames.length - 1];
    const previousFrame = this.frames[this.frames.length - 2];
    const twoPreviousFrame = this.frames[this.frames.length - 3];
    if (
      previousFrame &&
      previousFrame.isStrike &&
      twoPreviousFrame &&
      twoPreviousFrame.isStrike
    ) {
      this.score += currentFrame.roll1;
    }
    if (previousFrame && previousFrame.isStrike) {
      this.score += currentFrame.knockedDownPins;
    } else if (previousFrame && previousFrame.isSpare) {
      this.score += currentFrame.roll1;
    }
  }

  addBonusRoll(bonusRoll) {
    const tenthFrame = this.frames[9];

    if (!(tenthFrame.isStrike || tenthFrame.isSpare)) {
      return;
    }
    if (tenthFrame.isStrike && this.bonusRolls >= 2) {
      return;
    }
    if (tenthFrame.isSpare && this.bonusRolls >= 1) {
      return;
    }

    this.score += bonusRoll;
    this.bonusRolls += 1;
  }
}

module.exports = ScoreBoard;
