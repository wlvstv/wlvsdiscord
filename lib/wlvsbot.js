const Discord = require('discord.js');
const client = new Discord.Client();
const varx = require("./hid.js");


client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.joinChannel(client.channels.get("203283164796420096"));
});

client.on('message', message => {
  if(message.author.username==="Decoy") {
    if (message.content === 'beep') {
      message.reply('boop');
    }
    if (message.content === '!channels') {
      checkChannels(message);
    }
  }
});

client.login(varx.token);

client.on("ready", () => {

});

function checkChannels(m){
  console.log(client.channels);
  for (var x = 0; x < client.channels.length;x++){
    var channel = client.channels[x];
    // If the channel is a voice channel, ...
      // ... reply with the channel name and the ID ...
      console.log(channel.name + " - " + channel.id + " (" + channel.type + ")");
      // ... and join the channel
      break;
    }
}
//voice
101804165730160640

//text
203283164796420096
