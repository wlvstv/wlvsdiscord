const Discord = require('discord.js');
const client = new Discord.Client();
const varx = require("./hid.js");
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if(message.author.username==="Decoy") {
    if (message.content === 'beep') {
      message.reply('boop');
    }
    if (message.content === '!channels') {
      checkChannels(message);
      message.reply(':)');
    }
  }
});

client.login(varx.token);

function checkChannels(m){
  for (var channel of client.channels) {
    // If the channel is a voice channel, ...
      // ... reply with the channel name and the ID ...
      console.log(channel.name + " - " + channel.id + " (" + channel.type + ")");
      // ... and join the channel
      break;
    }
}
