const newUser = require('./newUserView')
const Poll = require('./pollView')
const Job = require('./job');
const vController = {
  newUser:async (ctx)=>await newUser.newUser(ctx),
  pollFirstQuestion:async (ctx)=> await Poll.FirstQuestion(ctx),
  pollSecondQuestion:async (ctx)=> await Poll.SecondQuestion(ctx),
  afterPollMessage:async (ctx)=> await Poll.afterPollMessage(ctx),
  userAlreadyExist:async (ctx)=> await newUser.userAlreadyExist(ctx),
  errorCommand:async (ctx)=> await newUser.errorCommand(ctx),
  onCounterIncrease:async (ctx,counter)=> await Job.counterIncrease(ctx,counter)
}

module.exports = vController;
