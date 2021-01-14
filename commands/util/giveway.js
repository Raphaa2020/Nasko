const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports={
 name: 'giveway',
    category: 'util',
    description: 'Giveaway command',
    run: async(bot,message,args)=>{
  if (!args[0])return message.reply(`<a:zwrong:796692969822486562> Vou-lhe mostra como funciona: n!giveway <tempo> <objeto a ser sorteado>`);
  if ( !args[0].endsWith("h") && !args[0].endsWith("m") && !args[0].endsWith("s")) return message.repl('<a:zwrong:796692969822486562> A forma correta de colocar o tempo e asim o: _6h_ e asim por diante.');
    const gift = args.slice(1).join(" ");
    if (!gift) return message.repl('<a:zwrong:796692969822486562>; Exemplo n!giveway 8m ganahara um chocolate.');
    const giftembed = new MessageEmbed()
      .setTitle(`**${gift}**`)
      .setDescription(`Para participar vc deve clicar na reação:🎁`)
     .addField(`Hora`, `${(args[0])}`, true)
    .addField(`Feito por`, `${message.author}`, true)
      .setColor("RANDOM");
    const g = await message.channel.send('🎉🎉Sorteio🎉🎉',giftembed);
    g.react("🎁");
    setTimeout(() => {
      if (g.reactions.cache.get("🎁").count <= 1) {
          const cancel = new MessageEmbed()
                .setDescription(`Ninguém reagiu, então eu cancelei o sorteio, talvez eu possa ficar com o prêmio!`)
        return g.edit(cancel);
      }

 const won = g.reactions.cache .get("🎁").users.cache.filter((not) => !not.bot).random();
      message.channel.send(`Parabéns **${won}** você ganhou** ${gift}**!`);
      won.send(`Parabéns **${won}** você ganhou **${gift}** no ${message.guild.name} servidor!`)
    }, ms(args[0]));
  },
};