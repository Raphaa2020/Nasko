const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
    name: "shop",
    aliases: ["SHOP", "Shop", "shop", "LOJA", "Loja", "loja"],
    description: "lista de itens que estão na loja",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],

    run: async (client, message, args) => {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(prefix === null) prefix = config.prefix;
      let embed = new Discord.MessageEmbed()
        .setAuthor("🛒Loja", message.author.displayAvatarURL())
        .setDescription(`:athletic_shoe: __Nikes:__ **5.000** [n!buy nikes]\n:mobile_phone: __Celular:__ **10.000** [n!buy celular]\n:computer: __PC Gamer:__ **50.000** [n!buy pcgamer]\n:red_car: __Carro:__ **100.000** [n!buy carro]\n:airplane: __Avião:__ **500.000** [n!buy aviao]\n:house_with_garden: __Mansão__: **1.000.000** [n!buy mansao]\n:new_moon: __Terreno na lua:__ **10.000.000** [n!buy terrenolua]\n:woman_bald_tone4: __Nego Ney:__ **100.000.000** [n!buy ney]`)
        .setColor("RANDOM")
      message.channel.send(embed)
    }
}