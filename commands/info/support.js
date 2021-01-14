const Discord = require('discord.js');

module.exports = {
run: async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Suporte')
.setDescription(`
<:WumpusWizard:783080586314383421>
Olá, presisa de suporte com algo?
O link do meu servidor é este aqui o; [serve](https://discord.gg/SYn6GbBy6s).
Lá você poderá reportar os bug's e dar sugestões.`);
message.channel.send(embed);
}
};