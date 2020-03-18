let storage = require('./storageManager')

const createNewUser = (user)=>{
  let users = storage.getUsers(),
  notInList = true;
  if(users.length===0){
    users.push(user);
    storage.saveUsersToDB(users);
    return true
  }
  else{
    for (let u of users){

      if(user.ID === u.ID){
        notInList = false;

      }
    }
    if(notInList){
      users.push(user);
      storage.saveUsersToDB(users);
      return true
    }
  }
  return false
}
module.exports = createNewUser;
