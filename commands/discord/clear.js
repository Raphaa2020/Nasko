const Discord = require('discord.js');
exports.run = (bot, message, args) => {
	if (!args[0]) {
		message.reply(
			'Especifique quantas mensagens devem ser apagadas! pode ser entre 2 e 100'
		);
		return;
	} else if (
		!message.member.roles.cache.has('Rapid Admin') &&
		!message.member.hasPermission('MANAGE_MESSAGES')
	) {
	    message.reply('Você não tem permissão para executar esse comando!');
		return;
	}

	if (args[0] > 100 || args[0] < 2)
		return message.reply('Envie um valor entre 2 e 100!');

	try {
		message.channel.bulkDelete(args[0]).then(messages => {
			message.channel.send(`${messages.size} mensagens deletadas!`);
			setTimeout(() => {
				bot.user.lastMessage.delete();
			}, 4000);
		});
	} catch (err) {
		message.channel.send(err);
	}
};