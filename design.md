
Classes:

Scoreboard:
    this.score=0
    this.frames = []

    1. check if current roll is strike:
        strike (if frame.roll2 is null score += knockedDownPins, frame.isStrike = true)
    2. not strike, check if current roll is spare:
        spare(if frame.knowckedDownPins = 10, score += knockedDownPins, frame.isSpare = true)
    3. check if isStrike:
        (if previous 2 rolls isStrike, score += knowckedDownPins)
    4. not isStrike, check isSpare:
        (if previous roll isSpare,score += knockedDownPins)
    5. else, no previous strike/spare, no current strike or spare
        (score += knowckedDownPins)


    methods:
    addFrame (as object)
    scoreCurrentRoll (1/2/5)
    checkStrikeSpareStatus (3/4)
    foramtScoreBoard(returns string?/csv?)

Frame(roll1, roll2=null):
    this.knockedDownPins = 0
    this.isStrike = false
    this.isSpare = false

    addRolls()



