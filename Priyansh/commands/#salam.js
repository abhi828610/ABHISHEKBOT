const fs = require("fs");
module.exports.config = {
  name: "salam",
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
  if(react.includes("Jai shree ram") ||
     react.includes("Jai shree ram") || react.includes("ASSALAMU ALAYKUM") || react.includes("salam") ||
react.includes("JAI SHREE RAM") ||
react.includes("Jai mahakal") ||     
react.includes("radha radha")) {
    var msg = {
        body: `${name} Jaii ShRee Ram❤️🙏✿`,attachment: fs.createReadStream(__dirname + `/noprefix/salam.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
