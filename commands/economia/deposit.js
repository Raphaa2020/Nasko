const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "deposit",
    aliases: [],
    usage: ["DEPOSIT", "Deposit", "deposit", "DEPOSITAR", "Depositar", "depositar"],
    description: "Deposita dinheiro para o banco",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let member = db.fetch(`money_${message.guild.id}_${user.id}`)
      let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)
      if (args[0] == 'all') {
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        let embedbank = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription("<a:nao:796692969822486562> Você não tem nenhum dinheiro para depositar!")
        if(money === 0) return message.channel.send(embedbank)
        db.add(`bank_${message.guild.id}_${user.id}`, money)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let embed5 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:sim:796693049702088735> Eu depositei todo o seu dinheiro para o banco`);
        message.channel.send(embed5)
      } else {
        let embed2 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você precisa especificar uma quantidade para depositar no banco!`);
        if (!args[0]) {
          return message.channel.send(embed2)
          .catch(err => console.log(err))
        }
        let embed3 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Não possível depositar dinheiro no banco`);
        if (args[0].includes("-")) { 
          return message.channel.send(embed3)
        }
        let embed4 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você não tem esse valor para depositar!`);
        if (member < args[0]) {
          return message.channel.send(embed4)
        }
        let embed5 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:sim:796693049702088735> Depositei ${args[0]} reais para o seu banco!`);
        message.channel.send(embed5)
        db.add(`bank_${message.guild.id}_${user.id}`, args[0])
        db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
      }
    }
}