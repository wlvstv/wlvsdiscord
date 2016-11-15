const Discord = require('discord.js');
const client = new Discord.Client();
const varx = require("./hid.js");


client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
});

client.on('message', m => {
  // Set the prefix
  let prefix = "!";
  if(!m.content.startsWith(prefix) || m.author.bot) return;

  if (m.content.startsWith(prefix + "beep")) {
    m.channel.sendMessage("boop");
  }
  else if (m.content.startsWith(prefix + "pick")) {
   pickRandom();
  }
});

client.login(varx.token);


function pickRandom() {
  var users = client.channels.get("101804165730160640").members;
  console.log(users);
}

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
