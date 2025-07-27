const fs = require("fs");
module.exports.config = {
  name: "babu",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("babu") ||
     react.includes("Babu") || react.includes("janu") || react.includes("Janu") ||
react.includes("jaan") ||
react.includes("Jaan")) {
    var msg = {
        body: `𝐇𝐔 𝐉𝐀𝐍𝐔 𝐂𝐇𝐄𝐋𝐎 𝐍𝐀 𝐊𝐇𝐎𝐏𝐂𝐇𝐀 𝐌𝐄 𝐂𝐇𝐄𝐋𝐓𝐀❤️🫦`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
