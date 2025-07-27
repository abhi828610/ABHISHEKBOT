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
     react.includes("OWNER") || 
react.includes("Owner")) {
		var msg = {
				body: "💐🍁★𝙊𝙒𝙉𝙀𝙍 + 𝙈𝘼𝘿𝙀 💦🕊️𝘽𝙔★\n\n✦⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆༄𒁍≛⃝𝐌𝐑.⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜🍀🍒💐\n\n★★᭄𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙄𝘿 𝙇𝙄𝙉𝙆 🥀🌿,:\n\n✦ https://www.facebook.com/profile.php?id=100074809252080 ✦ \n🌿🥀𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙀 𝙊𝙉\n 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈🌿🥀😋https://www.instagram.com/_yuvi___rajput___5159?igsh=dTY3cXI0ZDd4dzhl`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Priyansh.png`)
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {
