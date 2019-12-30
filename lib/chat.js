//Chat functions!
"use strict";
const security = require("./security.js");
const util = require("./util.js");
const twApi = require('./twitch.js')

//response obj

exports.responses = {
  "!pick": pickRandom,
  "!beep": boop,
  "!info": channelInfo
};

function pickRandom(client, message){
  if(security.isMod(message)){
    if(m.content.trim().split(" ").length < 2){
      message.channel.sendMessage("Send the number of users you want to pick!")
    }else {
      let num = m.content.split(" ")[1];
      let channel = security.isDev ? "101804165730160640" : client.channels.find("name", "general").id;
      if(m.content.split(" ").length > 2){
        let channelInput = m.content.split(" ")[2];
        if(client.channels.find("name", channelInput)){
          channel = client.channels.find("name", channelInput ).id;
        }else {
          message.channel.sendMessage("Channel not found :(");
          return;
        }
      }
      getRandom(parseInt(num),channel, message, client);
    }
  }
}

function boop(client, message) {
  message.channel.sendMessage("boop!");
}




function getRandom(number, channel, m, client) {
  var members = (client.channels.get(channel).members);
  if(members.size < number ){
    m.channel.send("Not enough users in the channel wolvesFeels");
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
    m.channel.send(msg);
  }
}

// !info command
async function channelInfo(client, message) {
  var resp = await twApi.channelInfo()
  console.log(resp)
  message.channel.send("Name: " + resp.name + " Views: " + resp.views)
}

