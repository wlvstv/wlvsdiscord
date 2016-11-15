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
   pickRandom(2,m);
  }
});

client.login(varx.token);


function pickRandom(number, m) {
  var members = (client.channels.get("101804165730160640").members);
  console.log(client.channels.get("101804165730160640").members.size);
  console.log(members.array());
  console.log(shuffleFY(members.array()));
  const picks = [];
  if(members.size < number ){
    m.channel.sendMessage("Not enough users in the channel wolvesFeels");
  }else{

  }
}

function shuffleFY(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

//voice
//101804165730160640

//text
//203283164796420096
