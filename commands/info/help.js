const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setColor(`#7ED1BB`)
		.setTitle(`Lista de Comandos`).setDescription(`Essa é nossa lista de comandos, para mais informações de comandos use: n!help [comando] (exemplo: n!help ping) 
    
**Utilidade**
giveway, weather, say, calc
◈ ━━━━━ ⸙━━━━━━━ ⸙━━━━━━━ ⸙━━━━━ ◈
**Info**
uptime, servericon, suggest, ping, invite, help, avatar, support, serverinfo, infobot
◈ ━━━━━ ⸙━━━━━━━ ⸙━━━━━━━ ⸙━━━━━ ◈
**Economy**
daily, rob, work, rol, pay, perfil, remove, buy, shop, atm, deposit, beg, weekly
◈ ━━━━━ ⸙━━━━━━━ ⸙━━━━━━━ ⸙━━━━━ ◈
**Full**
kiss, hug, slap, pat, neko, 8ball, aki, asci
◈ ━━━━━ ⸙━━━━━━━ ⸙━━━━━━━ ⸙━━━━━ ◈
**Staff**
kick, ban, slowmode, clear`);
	message.channel.send(embed);
};
