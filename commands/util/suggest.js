const Discord = require('discord.js');

module.exports = {
	name: 'suggest',
	aliases: ["SUGGEST", "Suggest", "suggest"],
	usage: ['Sugeir algo!'],
	description: 'Sugere alguma coisa para o server',
	clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	userPermissions: [],
	run: async (client, message, args) => {
		const { guild } = message;
		let MSG = args.join(' ');
		if (!MSG)
			return message
				.reply(
					`Você não colocou neuma sugestão. Para sugerir algo vc deve colocar sua sugestão na frente do comando.`
				)
				.then(msg => {
					msg.delete({ timeout: 7900 });
				});
		const _ = new Discord.MessageEmbed()
			.setAuthor(`Nova sugestão feita para ${guild.name}`, guild.iconURL())
			.addField('Sugestão', `> **${MSG}**`)
			.addField('Quem fez a sugestão', `> ${message.author}`)
			.setColor('RANDOM');
		message.channel.send(_).then(msg => {
			msg.react('✅');
			msg.react('❎');
		});
		message.delete();
	}
};
