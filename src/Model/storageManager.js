const fs = require('fs')
const settings = require('../Util/settings')

const storageManager = {
  users : [],
  saveUsersToDB: (users) => {
    this.users =users ;
    let usersDB = JSON.stringify(users);

    fs.writeFile(settings.db, usersDB, () => {
      console.log('saved to ',settings.db);
    });

  },
  loadUsersFromDB:async ()=>{
     await fs.readFile(settings.db,(err,data)=>{
       if(err) throw err;
       if(data.length!==0) {

         try {
           this.users = JSON.parse(data.toString());
         }
         catch (e) {
           console.log('File is empty or no file in path');
           storageManager.emptyFileSave();
         }
         console.log('loaded from', settings.db);
         console.log('users loaded', this.users);
        }
       else{
         this.users = [];
       }
       });

  },
  getUsers: ()=>{
    return this.users;
  },
  getUserData:(id)=>{
    for(let user of this.users){
      if(user.ID === id){
        return user;
      }
    }
    return null
  },
  setUserData:(User)=>{
    for(let user of this.users){
      if(user.ID === User.ID){
        user.median = User.median;
        user.wantedResult = User.wantedResult;
        user.statistic = User.statistic;
      }
    }
  },
  emptyFileSave:()=>{
    fs.writeFile(settings.db,'[]',()=> {
    console.log('db file created')
    });
    this.users = [];

  }

}

module.exports = storageManager;

