const Discord = require("discord.js");

module.exports = {
    name: "slowmode",
    aliases: ["Slowmode", "SLOWMODE", "slowmode"],
    usage: ["[tempo]"],
    description: "Muda o slowmode do channel",
    clientPermissions: ["ADMIN"],
    userPermissions: ["ADMIN"],
    run: async (client, message, args) => {
        var time = args[0]
        if (!time) {
            message.react("<a:zwrong:796692969822486562>");
            return message.reply("Você precisa de especificar o tempo para o slowmode!");
        }
        if (time <= 0) {
            message.react("<a:zwrong:796692969822486562>");
            return message.reply("o tempo do slowmode tem que ser de 1 para cima!");
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(`O slowmode deste chat é agora ${time}.`)
            .setColor("BBA6EB");
        message.channel.setRateLimitPerUser(time);
        message.channel.send(embed)
    }
}