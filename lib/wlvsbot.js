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
    if(m.user.username=="Decoy" || m.user.username=="wolvesatmydoor"){
      if(m.content.split(" ").length < 2){
        m.channel.sendMessage("Send the number of users you want to pick!")
      }else {
        var arg = m.content.split(" ")[1];
        pickRandom(parseInt(arg), m);
      }
    }

  }
});

client.login(varx.token);


function pickRandom(number, m) {
  var members = (client.channels.get("101804165730160640").members);
  console.log(client.channels.get("101804165730160640").members.size);

  if(members.size < number ){
    m.channel.sendMessage("Not enough users in the channel wolvesFeels");
  }else{
    var picks = shuffleFY(members.array()).slice(0,number);
    var msg = "";
    for(var x=0;x<picks.length;x++){
      console.log(picks[x].user.username);
      msg += "@" + picks[x].user.username;
      if(x< picks.length-1){
        msg += ", ";
      }
    }
    msg += " you have been chosen PogChamp!"
    m.channel.sendMessage(msg);
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
