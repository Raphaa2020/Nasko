const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "weekly",
    aliases: ["WEEKLY", "Weekly", "weekly", "SEMANAL", "Semanal", "semanal"],
    description: "Pega o seu premio semanamal",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let timeout = 604800000;
      let amount = 800;
      let daily = await db.fetch(`weekly_${message.guild.id}_${user.id}`);
      if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms1(timeout - (Date.now() - daily));
          let timeEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:nao:796692969822486562> Você já pegou a sua recompensa semanal nessa semana!\nVocê pode pegar de novo em ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s !`);
          message.channel.send(timeEmbed)
      } else {
          let moneyEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:sim:796693049702088735> Parabens! Você pegou seu recompensa semanal de ${amount} reais!`);
          message.channel.send(moneyEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, amount)
          db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())
      }
    }
}