const fs = require("fs");
module.exports.config = {
  name: "kiss",
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
  if(react.includes("Kiss") ||
     react.includes("Kiss") || react.includes("KISS") || react.includes("kiss") ||
react.includes("kiss") ||
react.includes("kiss") ||     
react.includes("kiss")) {
    var msg = {
        body: `${name} 𝐇𝐎𝐍𝐓𝐇 𝐑𝐀𝐒𝐈𝐋𝐄 𝐓𝐄𝐑𝐄 𝐇𝐎𝐍𝐓𝐇 𝐑𝐀𝐒𝐈𝐋𝐄 𝐔𝐌𝐀𝐇𝐇 𝐁𝐀𝐁𝐘😋✿`,attachment: fs.createReadStream(__dirname + `/noprefix/kiss.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
