const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "buy",
    aliases: ["BUY", "Buy", "buy", "COMPRAR", "Comprar", "comprar"],
    usage: ["[alguma coisa]"],
    description: "Compra alguma coisa da loja",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.author;
      let author = db.fetch(`money_${message.guild.id}_${user.id}`)
      if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:nao:796692969822486562> Você precisa ter 5.000 reais para comprar sapatos da Nike!`);
        if (author < 4000) return message.channel.send(Embed2)
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)
        let Embed3 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`<a:sim:796693049702088735> Você comprou sapatos da Nike por 5.000 reais!`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)
     } else if(args[0] == 'celular') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 10.000 reais para comprar um Celular!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`celular_${message.guild.id}_${user.id}`)
          db.add(`celular_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou um Celular por 10.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 10000)
          message.channel.send(Embed3)
     } else if(args[0] == 'pcgamer') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 50.000 reais para comprar um PC Gamer!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`pcgamer_${message.guild.id}_${user.id}`)
          db.add(`pcgamer_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou um PC Gamer por 50.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 50000)
          message.channel.send(Embed3)
     } else if(args[0] == 'carro') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 100.000 reais para comprar uma Carro!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`carro_${message.guild.id}_${user.id}`)
          db.add(`carro_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou um Carro por 100.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 100000)
          message.channel.send(Embed3)
     } else if(args[0] == 'aviao') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 500.000 reais para comprar um Avião!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`aviao_${message.guild.id}_${user.id}`)
          db.add(`aviao_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou um Avião por 500.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 500000)
          message.channel.send(Embed3)
     } else if(args[0] == 'mansao') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 1.000.000 reais para comprar uma Mansão!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`mansao_${message.guild.id}_${user.id}`)
          db.add(`mansao_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou uma Mansão por 1.000.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 1000000)
          message.channel.send(Embed3)
     } else if(args[0] == 'terrenolua') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 10.000.000 reais para comprar um Terreno Na Lua!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`terrenolua_${message.guild.id}_${user.id}`)
          db.add(`terrenolua_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou um Terreno Na Lua por 10.000.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 10000000)
          message.channel.send(Embed3)
     } else if(args[0] == 'ney') {
          let Embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:nao:796692969822486562> Você precisa ter 100.000.000 reais para comprar o Nego Ney!`);
          if (author < 32500) return message.channel.send(Embed2)
          db.fetch(`ney_${message.guild.id}_${user.id}`)
          db.add(`ney_${message.guild.id}_${user.id}`, 1)
          let Embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<a:sim:796693049702088735> Você comprou o Nego Ney por 100.000.000 reais!`);
          db.subtract(`money_${message.guild.id}_${user.id}`, 100000000)
          message.channel.send(Embed3)
      } else {
        message.channel.send("<a:nao:796692969822486562> Você precisa especificar ou colocar um item certo da loja para poder compra-lo!")
      }
    }
}