const fs = require("fs");
module.exports.config = {
  name: "aryn",
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
  if(react.includes("abhi") ||
   react.includes("abhishek") || react.includes("ARYAN") || react.includes("aRYN") ||
react.includes("Abhishek") ||
react.includes("shizu") ||     
react.includes("SHIZU")) {
    var msg = {
        body: `${name} 𝐿𝑂 𝑀𝐸𝑅𝐼 𝐽𝐴𝐴𝑁 😹 𝑀𝐸𝑅𝐸 𝐵𝑂𝑆𝑆 𝐾𝑂😘 𝑌𝐴𝐴𝐷 𝐾𝐼𝑌𝐴 𝐴𝐺𝐴𝑌𝐸 𝑀𝐸𝑅𝐸 𝐵𝑂𝑆𝑆 😎 ABHISHEK SINGH💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/abhishek.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
