const Discord = require("discord.js")
const db = require("quick.db")
const ms1 = require("parse-ms")

module.exports = {
    name: "profile",
    aliases: ["PROFILE", "Profile", "profile", "PERFIL", "Perfil", "perfil"],
    description: "Vê o perfil de alguém",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
      let user = message.mentions.members.first() || message.author;
      let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
      if (money === null) money = 0;
      let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
      if (bank === null) bank = 0;
      let nikes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
      if(nikes === null) nikes = '0'
      let celular = await db.fetch(`celular_${message.guild.id}_${user.id}`)
      if(celular === null) celular = '0'
      let pcgamer = await db.fetch(`pcgamer_${message.guild.id}_${user.id}`)
      if(pcgamer === null) pcgamer = '0'
      let carro = await db.fetch(`carro_${message.guild.id}_${user.id}`)
      if(carro === null) carro = '0'
      let aviao = await db.fetch(`aviao_${message.guild.id}_${user.id}`)
      if(aviao === null) aviao = '0'
      let mansao = await db.fetch(`mansao_${message.guild.id}_${user.id}`)
      if(mansao === null) mansao = '0'
      let terrenolua = await db.fetch(`terrenolua_${message.guild.id}_${user.id}`)
      if(terrenolua === null) terrenolua = '0'
      let ney = await db.fetch(`ney_${message.guild.id}_${user.id}`)
      if(ney === null) ney = '0'
      let moneyEmbed = new Discord.MessageEmbed()
        .setAuthor(`Perfil de ${user.username}`, message.author.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`🛍 Carteira: **${money}** reais\n🏦 Banco: **${bank}** reais\n\n**🎒 Inventário**\n\n:athletic_shoe: Nikes: **${nikes}**\n:mobile_phone: Celulares: **${celular}**\n:computer: PC Gamers: **${pcgamer}**\n:red_car: Carros: **${carro}**\n:airplane: Aviões: **${aviao}**\n:house_with_garden: Mansões: **${mansao}**\n:new_moon: Terrenos na lua: **${terrenolua}**\n:woman_bald_tone4: Negos Neis: **${ney}**\n`);
      message.channel.send(moneyEmbed)
    }
}