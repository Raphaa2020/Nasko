const { MessageEmbed } = require('discord.js');
const math = require('mathjs');
const Color = `RANDOM`;

module.exports = {
	name: 'math',
	category: 'fun',
	run: async (client, message, args) => {
		try {
			if (!args[0]) return message.reply('Por favor, dê-me a equação.');

			const embed = new MessageEmbed()
				.setColor(`${Color}`)
				.setTitle(`Resultado`)
				.setDescription(math.evaluate(args.join(' ')));

			message.channel.send(embed);
		} catch (error) {
			message
				.reply(`Por favor, me dê uma equação válida.`)
				.then(() => console.log(error));
		}
	}
};
