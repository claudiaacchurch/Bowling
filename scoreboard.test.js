/* eslint-disable */
const scoreBoard = require('./scoreboard');
const Frame = require('./frame');

jest.mock('./frame');

describe('testing scoreboard', () => {
  it('tests constructor', () => {
    const board = new scoreBoard();
    expect(board.score).toEqual(0);
    expect(board.frames).toEqual([]);
  });

  it('tests addFrame', () => {
    const board = new scoreBoard();
    const mockFrame = new Frame();
    mockFrame.roll1 = 5;
    mockFrame.roll2 = 3;
    board.addFrame(mockFrame);
    expect(board.frames.length).toEqual(1);
    expect(board.frames[0].roll1).toEqual(5);
  });

  it("tests scoreCurrentRoll", () => {
    const mockFrame = new Frame();
    mockFrame.knockedDownPins = 8;
    const myBoard = new scoreBoard();
    myBoard.addFrame(mockFrame);
    myBoard.scoreCurrentRoll();
    expect(myBoard.score).toEqual(8);
  });

  it("tests checkStrikeSpareStatus when previous is a strike", () => {
    const myBoard = new scoreBoard();
    const mockFrame = new Frame();
    mockFrame.roll1 = 10;
    mockFrame.knockedDownPins = 10;
    myBoard.addFrame(mockFrame);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame2 = new Frame();
    mockFrame2.roll1 = 2;
    mockFrame2.roll2 = 3;
    mockFrame2.knockedDownPins = 5;
    myBoard.addFrame(mockFrame2);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    expect(myBoard.score).toEqual(20);
  });

  it("tests checkStrikeSpareStatus when previous is a spare", () => {
    const myBoard = new scoreBoard();
    const mockFrame = new Frame();
    mockFrame.roll1 = 1;
    mockFrame.roll2 = 9;
    mockFrame.knockedDownPins = 10;
    myBoard.addFrame(mockFrame);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame2 = new Frame();
    mockFrame2.roll1 = 2;
    mockFrame2.roll2 = 3;
    mockFrame2.knockedDownPins = 5;
    myBoard.addFrame(mockFrame2);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    expect(myBoard.score).toEqual(17);
  });

  it("tests addBonusRoll when 10th is a strike", () => {
    const myBoard = new scoreBoard();
    const mockFrame = new Frame();
    mockFrame.roll1 = 1;
    mockFrame.roll2 = 9;
    mockFrame.knockedDownPins = 10;
    myBoard.addFrame(mockFrame);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame2 = new Frame();
    mockFrame2.roll1 = 2;
    mockFrame2.roll2 = 3;
    mockFrame2.knockedDownPins = 5;
    myBoard.addFrame(mockFrame2);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame3 = new Frame();
    mockFrame3.roll1 = 2;
    mockFrame3.roll2 = 3;
    mockFrame3.knockedDownPins = 5;
    myBoard.addFrame(mockFrame3);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame4 = new Frame();
    mockFrame4.roll1 = 2;
    mockFrame4.roll2 = 3;
    mockFrame4.knockedDownPins = 5;
    myBoard.addFrame(mockFrame4);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame5 = new Frame();
    mockFrame5.roll1 = 2;
    mockFrame5.roll2 = 3;
    mockFrame5.knockedDownPins = 5;
    myBoard.addFrame(mockFrame5);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame6 = new Frame();
    mockFrame6.roll1 = 2;
    mockFrame6.roll2 = 3;
    mockFrame6.knockedDownPins = 5;
    myBoard.addFrame(mockFrame6);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame7 = new Frame();
    mockFrame7.roll1 = 2;
    mockFrame7.roll2 = 3;
    mockFrame7.knockedDownPins = 5;
    myBoard.addFrame(mockFrame7);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame8 = new Frame();
    mockFrame8.roll1 = 2;
    mockFrame8.roll2 = 3;
    mockFrame8.knockedDownPins = 5;
    myBoard.addFrame(mockFrame8);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame9 = new Frame();
    mockFrame9.roll1 = 2;
    mockFrame9.roll2 = 3;
    mockFrame9.knockedDownPins = 5;
    myBoard.addFrame(mockFrame9);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    const mockFrame10 = new Frame();
    mockFrame10.roll1 = 10;
    mockFrame10.knockedDownPins = 10;
    myBoard.addFrame(mockFrame10);
    myBoard.scoreCurrentRoll();
    myBoard.checkStrikeSpareStatus();
    myBoard.addBonusRoll(8);
    myBoard.addBonusRoll(1);
    expect(myBoard.score).toEqual(71);
  });

  
});
