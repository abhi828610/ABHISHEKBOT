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
  if(react.includes("owner") ||
     react.includes("owner") || react.includes("ADMIN") || react.includes("BOSS") ||
react.includes("owner") ||
react.includes("owner") ||     
react.includes("owner")) {
    var msg = {
        body: `${name} 🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒✬✿╭┳✪✪╤───────────➛➣ ★�*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.𝐀𝐁𝐇𝐈𝐒𝐇𝐄𝐊 𝐒𝐈𝐍𝐆𝐇🍀🍒💐)✪��★  ✬✿╭┳✪✪╤───────────➛➣🤩🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛    
🕊️🌸
...
✮┼💞┼✮
☸🕊️━━•🌸•━━🕊️☸
✮☸✮
✮┼🍫┼✮
☸🎀━━•🧸•━━🎀☸
✮┼🦢┼✮
✮☸✮
☸🌈━━•🤍•━━🌈☸❤️
✮☸✮
✮┼❄️┼✮🥀💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Abhi1.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
