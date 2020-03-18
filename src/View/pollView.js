const Keyboard = require('./keyboards');
const Markup = require('telegraf/markup');
const pollView = {
  FirstQuestion:async (ctx)=>{
    await ctx.reply('Сколько сигарет в среднем вы курите в день?');
  },
  SecondQuestion:async (ctx)=>{
    await ctx.reply('Сколько сигарет вы бы хотели курить?');
  },
  afterPollMessage:async (ctx)=>{
    await ctx.reply(`Спасибо за ваши ответы, можно начинать`, Markup.keyboard(Keyboard.defaultMenu)
        .resize(true)
        .extra()

    )
  }
}
module.exports = pollView;
