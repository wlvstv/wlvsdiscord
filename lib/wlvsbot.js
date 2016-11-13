const Discord = require('discord.js');
const client = new Discord.Client();
const varx = require("hid.js");
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if(message.author.username==="Decoy") {
    if (message.content === 'beep') {
      message.reply('boop');
    }
  }
});

client.login(varx.token);
