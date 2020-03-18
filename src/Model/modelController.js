const userModel = require('./userModel')
const createNewUser = require('./newUser')
const vController = require('../View/viewController');
const Storage = require('./storageManager')
const mController = {
    newUser : async (ctx) => {
        let user = new userModel(ctx.message.from.id);
        if(createNewUser(user)){
            await vController.newUser(ctx);
        }
        else{
            await vController.userAlreadyExist(ctx)
        }

    },
    pollPassing:async (ctx)=>{

       let currentUser = Storage.getUserData(ctx.message.from.id);
       if(currentUser.data.median ===null){
           currentUser.data.median = Number(ctx.message.text);
           Storage.setUserData(currentUser);
           await vController.pollSecondQuestion(ctx);
           return false
       }
       else if(currentUser.data.wantedResult ===null){
           currentUser.data.wantedResult = Number(ctx.message.text)
           await vController.afterPollMessage(ctx);
           Storage.setUserData(currentUser);
           
           return true
       }

    },

    mainCounterIncrease:async (ctx)=>{
        let currentUser = Storage.getUserData(ctx.message.from.id);
        if(currentUser!==null) {
            currentUser.data.today += 1;
            Storage.setUserData(currentUser);
            await vController.onCounterIncrease(ctx, currentUser.data.today);
            Storage.saveUsersToDB(Storage.getUsers());
        }
        else{
            await vController.errorCommand(ctx);
        }
    },
    saveData:async ()=>{
        Storage.saveUsersToDB(Storage.getUsers());
    },
    getUserData: (id)=>{
        return Storage.getUserData(id)
    },
    setUserData:(user)=>{
        Storage.setUserData(user);
    }

}
module.exports = mController;

