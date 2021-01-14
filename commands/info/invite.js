const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: ['Invite', 'INVITE', 'invite'],
	description: 'Invite do Bot',
	clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	userPermissions: [],
	run: async (client, message, args) => {
		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Convida o Bot!')
			.setDescription(
				`<:WumpusWizard:783080586314383421> Você quer me adicionar em outros servidores/guilds do Discord? Então clique [aqui](https://discord.com/oauth2/authorize?client_id=770315739512569887&scope=bot&permissions=8) para me adicionar em outro servidor!
				
E, é claro, entre na minha guild para dar sugestões, reportar bugs e muito mais!
https://discord.gg/SYn6GbBy6s`
			);
		message.channel.send(embed);
	}
};
