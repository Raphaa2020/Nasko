const discord = require("discord.js");
const figlet = require("figlet"); //CERTIFIQUE-SE DE INSTALAR O PACOTE DE FIGLET OU O CÓDIGO NÃO FUNCIONARÁ.

module.exports = {
    name: "ascii",
    aliases: [],
    category: "fun",
    usage: "ascii <text>",
    description: "Retorna o texto fornecido em formato ascii.",
    run: async (client, message, args) => {

   let text = args.join(" ");
   if(!text) {
return message.reply(`Você presisa colocar um texto na frente do comando para fazer o asci.`)
}
   let maxlen = 20
if(text.length > 20) {
return message.reply(`Por favor, coloque um texto com 20 caracteres ou menos porque a conversão não será boa!`)
}
 //NOVAMENTE, CERTIFIQUE-SE DE INSTALAR O PACOTE DE FIGLET!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};