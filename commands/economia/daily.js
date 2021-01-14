const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "daily",
    aliases: ["DAILY", "Daily", "daily"],
    description: "Receber a sua recompensa diária",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let timeout = 8640000000;
      let amount = 450;
      let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
      if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms1(timeout - (Date.now() - daily));
          let timeEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:nao:796692969822486562> Você já coletou sua recompensa diária hoje!\nPegue novamente daqui a ${time.hours}h ${time.minutes}m ${time.seconds}s !`);
          message.channel.send(timeEmbed)
      } else {
          let moneyEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:sim:796693049702088735> Você coletou sua recompensa diária de ${amount}`);
          message.channel.send(moneyEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, amount)
          db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
      }
    }
}