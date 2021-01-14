const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")
const config = require("../../config.json")

module.exports = {
    name: "roulette",
    aliases: ["APOSTAR", "Apostar", "apostar", "ROL", "Rol", "rol"],
    cooldown: "5",
    description: "Aposta dinheiro na roleta",
    usage: ["[cor dinheiro]"],
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let prefix = db.get(`prefix_${message.guild.id}`)
    	if(prefix === null) prefix = config.prefix;
      let user = message.author;
      function isOdd(num) { 
        if ((num % 2) == 0) return false;
        else if ((num % 2) == 1) return true;
      }
      let colour = args[0];
      let money = parseInt(args[1]);
      let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
      let random = Math.floor(Math.random() * 37);
      let moneyhelp = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Especifique uma quantidade de dinheiro para apostar\n${prefix}apostar <cor> <quantidade para apostar>`);
      let moneymore = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você não pode apostar mais dinheiro do que você tem!`);
      let colorbad = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Especifique uma cor para apostar\nRed [1.5x] | Black [2x] | Green [15x]`);
      let moneynega = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você não pode apostar dinheiro negativo!`);
      if (!colour)  return message.channel.send(colorbad);
      colour = colour.toLowerCase()
      if (!money) return message.channel.send(moneyhelp); 
      if (money > moneydb) return message.channel.send(moneymore);
      if(args[1].includes("-")) return message.channel.send(moneynega)
      if (colour == "b" || colour.includes("black")) colour = 0;
      else if (colour == "r" || colour.includes("red")) colour = 1;
      else if (colour == "g" || colour.includes("green")) colour = 2;
      else return message.channel.send(colorbad); 
      if (random == 0 && colour == 2) { // Green
          money *= 15
          db.add(`money_${message.guild.id}_${user.id}`, money)
          let moneyEmbed1 = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:sim:796693049702088735> :green_circle: Parabéns! Você ganhou ${money} reais!\nMultiplicado por: 15x`);
          message.channel.send(moneyEmbed1)
      } else if (isOdd(random) && colour == 1) { // Red
          money = parseInt(money * 1.5)
          db.add(`money_${message.guild.id}_${user.id}`, money)
          let moneyEmbed2 = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:sim:796693049702088735> :red_circle: Parabéns! Você ganhou ${money} reais!\nMultiplicado por: 1.5x`);
          message.channel.send(moneyEmbed2)
      } else if (!isOdd(random) && colour == 0) { // Black
          money = parseInt(money * 2)
          db.add(`money_${message.guild.id}_${user.id}`, money)
          let moneyEmbed3 = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:sim:796693049702088735> :black_circle: Parabéns! Você ganhou ${money} reais!\nMultiplicado por: 2x`);
          message.channel.send(moneyEmbed3)
      } else { // Wrong
          db.subtract(`money_${message.guild.id}_${user.id}`, money)
          let moneyEmbed4 = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`<a:nao:796692969822486562> Você perdeu ${money} reais!\nMultiplicador: 0x`);
          message.channel.send(moneyEmbed4)
      }
    }
}