const { MessageEmbed } = require('discord.js');

const moment = require('moment');

const filterLevels = {

	DISABLED: 'Off',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const regions = {

	brazil: 'Brasil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};

module.exports = {

  name: "serverinfo",

  category: "Info",

  aliases: ["serverinfo"],

  description: "Get info about your server.",

  usage: "serverinfo ",

run: (client, message, args) => {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const members = message.guild.members.cache;

		const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()

			.setDescription(`**Informações do __${message.guild.name}__**`)

			.setColor('BLUE')

			.setThumbnail(message.guild.iconURL({ dynamic: true }))

			.addField('Geral', [

				`**❯ Nome:** ${message.guild.name}`,

				`**❯ ID:** ${message.guild.id}`,

				`**❯ Dono:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,

				`**❯ Região:** ${regions[message.guild.region]}`,

				`**❯ Criado:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,

				'\u200b'

			])

			.addField('Estatisticas', [

				`**❯ Cargos:** ${roles.length}`,
				
				`**❯ Menbros:** ${message.guild.memberCount}`,

				`**❯ Bots:** ${members.filter(member => member.user.bot).size}`,

				`**❯ Canais de Texto:** ${channels.filter(channel => channel.type === 'text').size}`,

				`**❯ Canais de voz:** ${channels.filter(channel => channel.type === 'voice').size}`,

				'\u200b'

			])

			.addField('Presença', [

				`**❯🟢 Online:** ${members.filter(member => member.presence.status === 'online').size}`,

				`**❯🟡 Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,

				`**❯🔴 Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,

				`**❯⚫ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,

				'\u200b'

			])

			.setTimestamp();

		message.channel.send(embed);

	}

};