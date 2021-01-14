const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "work",
    aliases: ["WORK", "Work", "work", "TRABALHAR", "Trabalhar", "trabalhar"],
    description: "Trabalha para ganhar dinheiro",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let author = await db.fetch(`work_${message.guild.id}_${user.id}`)
      let timeout = 900000;
      if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms1(timeout - (Date.now() - author));
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<a:nao:796692969822486562> Você já trabalhou agora a pouco, está na hora de descansar.\nVocê pode voltar a trabalhar em ${time.minutes}m ${time.seconds}s!`);
        message.channel.send(timeEmbed)
      } else {
        let replies = ['Programador','Construtor','Empregado de Restaurante','Uber','Chefe de Cozinha','Mecânico', 'Youtuber', 'Futebolista', 'Médico']
        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 180) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<a:sim:796693049702088735> Você está trabalho como **${replies[result]}** e seu salário é de: **${amount} reais**`);
        message.channel.send(embed1)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
      };
    }
}