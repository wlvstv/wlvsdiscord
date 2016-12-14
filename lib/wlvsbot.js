const Discord = require('discord.js');
const client = new Discord.Client();
const security = require("./security.js");
const loginInfo = security.getCredentialContext();
const chat = require("./chat.js");

//Initialization
client.on('ready', () => {
  console.log(`Wolves Discord: ${client.channels.size} channels, ${client.guilds.size} servers, ${client.users.size} users.`);
});

client.on('message', m => {
  // Set the prefix
  let prefix = "!";
  if(!m.content.startsWith(prefix) || m.author.bot) return;
  if(chat.responses[m.content.split(" ")[0]]) {
    chat.responses[m.content.split(" ")[0]](client, m);
  }
});

client.login(loginInfo.token);


