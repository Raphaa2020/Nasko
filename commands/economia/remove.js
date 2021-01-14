const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "withdraw",
    aliases: ["REMOVE", "Remove", "remove", "SACAR", "Sacar", "sacar"],
    description: "sacar dinheiro do banco",
    usage: ["[dinheiro]"],
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let member = db.fetch(`money_${message.guild.id}_${user.id}`)
      let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)
      if (args[0] == 'all') {
        let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        db.subtract(`bank_${message.guild.id}_${user.id}`, money)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let embed5 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:sim:796693049702088735> Saca todas as moedas que estavam no banco!`);
        message.channel.send(embed5)
      } else {
        let embed2 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Especifica uma quantidade de dinheiro para sacar por favor!`);
        if (!args[0]) {
          return message.channel.send(embed2)
        }
        let embed3 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você não pode pegar seu dinheiro agora!`);
        if (args[0].includes('-')) { 
          return message.channel.send(embed3)
        }
        let embed4 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você não tem essa quantia de dinheiro toda no banco!`);
        if (member2 < args[0]) {
          return message.channel.send(embed4)
        }
        let embed5 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:sim:796693049702088735> Você retirou ${args[0]} reais do banco!`);
        message.channel.send(embed5)
        db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
        db.add(`money_${message.guild.id}_${user.id}`, args[0])
      }
    }
}