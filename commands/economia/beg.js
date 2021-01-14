const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "beg",
    aliases: ["BEG", "Beg", "beg", "MENDINGAR", "Mendingar", "mendingar"],
    description: "pedir por dinheiro",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let timeout = 600000;
      let amount = 25;
      let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);
      if (beg !== null && timeout - (Date.now() - beg) > 0) {
        let time = ms1(timeout - (Date.now() - beg));
        let timeEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você já mendingou por money hoje\n\n mendingue novamente daqui a ${time.minutes}m ${time.seconds}s!`);
        message.channel.send(timeEmbed)
      } else {
        let testChance = Math.random() * 100;
        if ((testChance -= 55) < 0) {
        	let moneyEmbed = new Discord.MessageEmbed()
          		.setColor("RANDOM")
          		.setDescription(`<a:sim:796693049702088735> Você mendingou por money e ganhou ${amount} reais!`);
        	message.channel.send(moneyEmbed)
        	db.add(`money_${message.guild.id}_${user.id}`, amount)
        	db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
        } else {
            let moneyEmbed = new Discord.MessageEmbed()
          		.setColor("RANDOM")
          		.setDescription(`<a:nao:796692969822486562> Você mendingou por money mais ninguém lhe deu!`);
        	message.channel.send(moneyEmbed)
        	db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
        }
      }
    }
}