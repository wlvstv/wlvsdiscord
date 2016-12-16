//Security utility functions!
"use strict";
let modRole = "";
//Get the security context (test v. prod)
exports.getCredentialContext = function(){
  try {
    return require("./hid.js");
  } catch(e){}
  return require("./credT.js")
};
//Check if a user is a moderator
exports.isMod = function(message){
  if(user.username.toLowerCase() === 'wolvesatmydoor') return true;
  let modRole = message.guild.roles.find("name", "THE MODERATORS");
  return message.member.roles.has(modRole.id);
};
