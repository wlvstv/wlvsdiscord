// Dependencies
require('isomorphic-fetch');
var moment = require('moment');
var config = require('./credT').config;

// Variables
let accessToken = "maf1u2lu25ed2scfd18wcw01vph4ni";
let tokenExpire = moment();
let channelId = "195594043"; // geobot_twitch

//#region Commands
// Get user (channel) data
exports.channelInfo = async function(channelName) {
  const endpoint = `https://api.twitch.tv/helix/users?id=${channelId}`;
  const channelData = await authorizedTwitch(endpoint, "GET")
  console.log(channelData)
  return {name: channelData.data[0].display_name, views: channelData.data[0].view_count, id: channelData.data[0].id}
}


//#endregion



//#region Helpers
// Get Channel Id
async function getChannelId(channelName) {
  let endpoint = `https://api.twitch.tv/kraken/users?login=${channelName}`;
  const resp = await fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": config.twCID
    }
  })
    .then(res => {
      // do something with the res
      res.json()
    })
    .catch(err => {
      console.log(err)
    })
    console.log(resp)
  return resp;
}


// Get new access token from Twitch
async function getToken() {
  let endpoint = `https://id.twitch.tv/oauth2/token?client_id=${config.twCID}&client_secret=${config.twSecret}&grant_type=client_credentials`
  let resp = await fetch(endpoint, {method: "POST"})
    .then(res => {
      // Get set token
      if (res.status >= 400) {
        throw new Error("Bad Server Request")
      } else {
        return res.json()
      }
    })
    .catch(err => {
      console.log(err)
    })
  return resp;
}

// Authorized Twitch Access
async function authorizedTwitch(endpoint, _METHOD) {
  // Check if live token exists or is expired
  if(accessToken === null || moment().diff(tokenExpire, 'seconds') > 1) {
    // if true, get new token
    const newToken = await getToken();
    accessToken = newToken.access_token
    tokenExpire = moment().add(newToken.expires_in, "s");

    const resp = await fetch(endpoint, {
      method: _METHOD,
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad Server Request")
        }
        return res.json()
      })
      .catch(err => {
        console.log(err)
      })
    return resp;
  } else {
    const resp = await fetch(endpoint, {
      method: _METHOD,
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad Server Request")
        }
        return res.json()
      })
      .catch(err => {
        console.log(err)
      })
    return resp;
  }
}

// Open Twitch Access
async function openTwitch(endpoint, _METHOD) {
  const resp = await fetch(endpoint, {
    method: _METHOD,
    headers: {
      "Client-ID": config.twCID
    }
  })
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad Server Request")
      }
      return res.json()
    })
    .catch(err => {
      console.log(err)
    })
  return resp;
}
//#endregion

