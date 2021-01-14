const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "atm",
    aliases: ["ATM", "Atm", "atm", "MONEY", "Money", "money", "SALDO", "Saldo", "saldo"],
    usage: ["[nada | @alguém]"],
    description: "Olhe o dinheiro de alguém",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        let bal = db.fetch(`money_${message.guild.id}_${member.id}`)
        if (bal === null) bal = 0;
        let bank = await db.fetch(`bank_${message.guild.id}_${member.id}`)
        if (bank === null) bank = 0;
        let moneyEmbed = new Discord.MessageEmbed()
          .setAuthor(`Money de ${member.user.username}`, member.user.displayAvatarURL())
          .setColor("RANDOM")
          .setDescription(`**💰Carteira: ${bal} Reais\n💰Banco: ${bank} Reais**`);
        message.channel.send(moneyEmbed)
    }
}