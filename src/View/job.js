const job = {
counterIncrease:async (ctx,counter)=>{
  await ctx.reply(`Счетчик увеличен, сегодня вы курили: ${counter} раз(а)`)
}


}

module.exports = job;
