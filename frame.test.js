/* eslint-disable */

const frame = require('./frame')

describe('testing frame', () => {
    it('tests constructor ', () => {
        const emptyFrame = new frame(5, 2);
        expect(emptyFrame.roll1).toEqual(5);
        expect(emptyFrame.roll2).toEqual(2);
        expect(emptyFrame.knockedDownPins).toEqual(0);
        expect(emptyFrame.isStrike).toEqual(false);
        expect(emptyFrame.isSpare).toEqual(false);
      });

    it('tests constructor roll2 null', () => {
      const emptyFrame = new frame(10);
      expect(emptyFrame.roll1).toEqual(10);
      expect(emptyFrame.roll2).toEqual(null);
    });

    it('tests add rolls', () => {
        const emptyFrame = new frame(5, 3);
        emptyFrame.addRoll();
        expect(emptyFrame.knockedDownPins).toEqual(8);
      });
    
    it('tests add rolls with strike', () => {
        const emptyFrame = new frame(10);
        emptyFrame.addRoll();
        expect(emptyFrame.knockedDownPins).toEqual(10);
    });

  });