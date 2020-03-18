const Markup = require('telegraf/markup')
const Keyboard = require('./keyboards')
const newUserView = {
  newUser:async (ctx)=>{
    await ctx.reply(`Привет ${ctx.message.from.first_name}, пожалуйста ответьте на пару вопросов`, Markup.keyboard(Keyboard.pollKeyboard)
        .oneTime()
        .resize(true)
        .extra()
    )


  },
  userAlreadyExist:async (ctx)=>{
    await ctx.reply(`С возвращением ${ctx.message.from.first_name}`, Markup.keyboard(Keyboard.defaultMenu)
      .resize(true)
      .extra()

    );
  },
  errorCommand:async (ctx)=>{
    await ctx.reply(`Я не знаю такой команды: ${ctx.message.text}`);

  }
}

module.exports = newUserView;
