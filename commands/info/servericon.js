const discord = require('discord.js');

module.exports = {
	name: 'servericon',
	aliases: [''],
	category: 'info',
	description: 'Obter avatar do servidor',
	run: async (client, message, args) => {
		let embed = new discord.MessageEmbed();

		embed.setDescription(
			`Clique [aqui](${message.guild.iconURL({ dynamic: true, size: 1024 })}) para baixar a imagem!`
		);
		embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }));
		embed.setColor('RANDOM');

		message.channel.send(embed);
	}
};
