 const fs = require("fs");
module.exports.config = {
	name: "Arun",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Arun") || 
react.includes("arun")) {
		var msg = {
				body: "💐🍁★𝙊𝙒𝙉𝙀𝙍 + 𝙈𝘼𝘿𝙀 💦🕊️𝘽𝙔★\n\n✦⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆༄𒁍≛⃝𝐌𝐑.𝐒𝐀𝐍𝐃𝐄𝐄𝐏 𝐒𝐀𝐕𝐀𝐑𝐈𝐘𝐀🍀🍒💐\n\n★★᭄𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙄𝘿 𝙇𝙄𝙉𝙆 🥀🌿,:\n\n✦ https://www.facebook.com/profile.php?id=61561421229589 ✦ \n🌿🥀𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙀 𝙊𝙉\n 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈🌿🥀😋https://www.instagram.com/sunny_sanwariya?igsh=d3hpMDk1d3BjZGpu ✦ \n🌿🥀𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙀 𝙊𝙉\n 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀🌿🥀😋@Yuvi5159`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Abhi1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
