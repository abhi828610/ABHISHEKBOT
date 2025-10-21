const fs = require("fs");
module.exports.config = {
  name: "bf",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Bf") ||
     react.includes("bf") || react.includes("BOYFRIEND") || react.includes("boyfriend") ||
react.includes("bf") ||
react.includes("Bf") ||     
react.includes("bf")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄 𝐌𝐎𝐑𝐈 𝐌𝐀𝐈𝐘𝐀 𝐋𝐄 𝐓𝐄𝐑𝐀 𝐂𝐔𝐓𝐄 𝐁𝐅😹✿`,attachment: fs.createReadStream(__dirname + `/noprefix/bf.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😜", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
