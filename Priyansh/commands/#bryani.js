const fs = require("fs");
module.exports.config = {
  name: "bryani",
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
  if(react.includes("biryani") ||
     react.includes("Biryani") || react.includes("BIRYANI") || react.includes("biryni") ||
react.includes("bryani") ||
react.includes("Bryani") ||     
react.includes("biryeni")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐉𝐀𝐀𝐍 𝐁𝐈𝐑𝐘𝐀Ñ𝐈 𝐊𝐇𝐀𝐀𝐎 *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.𝐀𝐁𝐇𝐈𝐒𝐇𝐄𝐊 𝐒𝐈𝐍𝐆𝐇🍀🍒💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Bryani.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
