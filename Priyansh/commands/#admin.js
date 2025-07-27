const fs = require("fs");
module.exports.config = {
  name: "admin",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE SILENT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("admin") ||
     react.includes("Admin") || react.includes("ADMIN") || react.includes("BOSS") ||
react.includes("ain") ||
react.includes("min") ||     
react.includes("in")) {
    var msg = {
        body: `${name} "💐🍁★𝙊𝙒𝙉𝙀𝙍 + 𝙈𝘼𝘿𝙀 💦🕊️𝘽𝙔★\n\n✦⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆༄𒁍≛⃝𝐌𝐑.𝐒𝐀𝐍𝐃𝐄𝐄𝐏 𝐒𝐀𝐕𝐀𝐑𝐈𝐘𝐀🍀🍒💐\n\n★★᭄𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙄𝘿 𝙇𝙄𝙉𝙆 🥀🌿,:\n\n✦ https://www.facebook.com/profile.php?id=61561421229589 ✦ \n🌿🥀𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙀 𝙊𝙉\n 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈🌿🥀😋https://www.instagram.com/sunny_sanwariya?igsh=d3hpMDk1d3BjZGpu ✦ \n🌿🥀𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙀 𝙊𝙉\n 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀🌿🥀😋@Yuvi5159`",
                                       ✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Abhi1.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
