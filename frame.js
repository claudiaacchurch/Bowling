class Frame {
  constructor(roll1, roll2 = null) {
    (this.roll1 = roll1),
      (this.roll2 = roll2),
      (this.notes = ""),
      (this.knockedDownPins = 0),
      (this.isStrike = false),
      (this.isSpare = false),
      (this.bonus = true);
  }

  addRoll() {
    if (this.roll2 != null) {
      this.knockedDownPins += this.roll1 + this.roll2;
    } else {
      this.knockedDownPins += this.roll1;
    }
  }
}

module.exports = Frame;
