const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "pay",
    aliases: ["PAY", "Pay", "pay", "PAGAR", "Pagar", "pagar"],
    usage: ["[@alguém dinheiro]"],
    description: "Dá dinheiro a alguém",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.mentions.members.first();
      let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
      let embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<a:nao:796692969822486562> Você precisa mencionar alguém para pagar!`);
      if (!user) {
        return message.channel.send(embed1)
      }
      let embed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<a:nao:796692969822486562> Você precisa específica uma quantia para pagar!`);
      if (!args[1]) {
          return message.channel.send(embed2)
      }
      let embed3 = new Discord.MessageEmbed()
      	.setColor("RANDOM")
      	.setDescription(`<a:nao:796692969822486562> Não foi possível fazer pagamento!`);
      if (args[1].includes('-')) { 
          return message.channel.send(embed3)
      }
      let embed4 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<a:nao:796692969822486562> Você não tem esse dinheiro todo para transferência!`);
      if (member < args[1]) {
          return message.channel.send(embed4)
      }
      let embed5 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<a:sim:796693049702088735> Transferência realizada para ${user.user.username} de ${args[1]} reais!`);
      message.channel.send(embed5)
      db.add(`money_${message.guild.id}_${user.id}`, args[1])
      db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])
    }
}