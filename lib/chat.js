//Chat functions!
"use strict";
const security = require("./security.js");
const util = require("./util.js");

//response obj

exports.responses = {
  "!pick": pickRandom,
  "!beep": boop
};


function pickRandom(client, message){
  if(security.isMod(message)){
    if(m.content.trim().split(" ").length < 2){
      message.channel.sendMessage("Send the number of users you want to pick!")
    }else {
      var arg = m.content.split(" ")[1];
      getRandom(parseInt(arg), message, client);
    }
  }
}

function boop(client, message) {
  message.channel.sendMessage("boop!");
}


function getRandom(number, m, client) {
  var members = (client.channels.get("101804165730160640").members);
  if(members.size < number ){
    m.channel.sendMessage("Not enough users in the channel wolvesFeels");
  }else{
    var picks = util.fyShuffle(members.array()).slice(0,number);
    var msg = "";
    for(var x=0;x<picks.length;x++){
      console.log(picks[x].user.username);
      msg += "@" + picks[x].user.username;
      if(x< picks.length-1){
        msg += ", ";
      }
    }
    msg += " you have been chosen PogChamp!";
    m.channel.sendMessage(msg);
  }
}

