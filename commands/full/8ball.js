const Discord = require('discord.js');

module.exports = {
	name: '8ball',
	aliases: ['8Ball', '8BALL', '8ball', '8Ball', '8BALL'],
	usage: ['[alguma coisa]'],
	description: 'Pergunta alguma coisa ao Bot',
	clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	userPermissions: [],
	run: async (client, message, args) => {
		let args1 = message.content.split(' ').slice(0);
		let question = args1.slice(1).join(' ');
		if (!question) {
			message.react(':X:748632517476745226');
			return message.reply('Precisas de especificar uma pergunta!');
		} else {
			let answers = [
				'Sim.',
				'Não.',
				'Talvez.',
				'Claro!',
				'Não sei.',
				'Provavelmente.',
				'Provavelmente não.',
				'Claro que não!',
				'Não me diga.'
			];
			let response = answers[Math.floor(Math.random() * answers.length)];
			let embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.addField('Pergunta: ', question)
				.addField('Resposta: ', response);
			message.channel.send(embed);
		}
	}
};
