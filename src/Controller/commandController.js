const mController = require('../Model/modelController')
const vController = require('../View/viewController')


const commandController = {
  onInput : async (ctx) => {

    switch (true) {
      case /\/start/.test(ctx.message.text):
        console.log(ctx.message.text);
        await mController.newUser(ctx);
        break;
      case /^[0-9]*$/.test(ctx.message.text):
        if( !mController.getUserData(ctx.message.from.id).isSetupComplete){
          let isPollPassed = await mController.pollPassing(ctx);
          if(isPollPassed) {
            let user = mController.getUserData(ctx.message.from.id);
            user.isSetupComplete = true;
            mController.setUserData(user);
            await mController.saveData();
          }
        }
        else{
          await vController.errorCommand(ctx);
        }
        break;
      case /Ok/.test(ctx.message.text):
        if(mController.getUserData(ctx.message.from.id)!==null){
          if(!mController.getUserData(ctx.message.from.id).isSetupComplete){
            await vController.pollFirstQuestion(ctx);
          }
        }
        else{
          await vController.errorCommand(ctx);
        }

        break;
      case /\+1/.test(ctx.message.text):
        await mController.mainCounterIncrease(ctx);
        break;
      case /Аккаунт/.test(ctx.message.text):
        break;
      default:
        await vController.errorCommand(ctx);
        break;
    }

  }
}
module.exports = commandController;
