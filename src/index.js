const settings = require('./Util/settings')
const telegramApi = require('telegraf')
const commandController = require('./Controller/commandController')
const storageManager = require('./Model/storageManager');
const bot = new telegramApi(settings.AUTH_TOKEN);

bot.on('text', (async ctx => {
  console.log(`${ctx.message.text} от ${ctx.message.from.first_name}`);
  await commandController.onInput(ctx);

}))

const startup = async ()=>{
  await bot.launch();
}
date = new Date;
settings.today = date.getDay();
setInterval(()=>{
  let date = new Date();
  if(date.getDay()!==settings.today) {
    let users = storageManager.getUsers();
    for (let user of users) {
      user.data.today = 0;
    }
    storageManager.saveUsersToDB(users);
    settings.today = date.getDay();
  }
},828000)
startup().then(async ()=>{
  console.log('Launched');

  await storageManager.loadUsersFromDB();

})

