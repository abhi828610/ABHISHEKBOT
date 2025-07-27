const fs = require("fs");
module.exports.config = {
	name: "",
  version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "priyansh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) 

  { 
    if (this.config.credits != '\ud835\ude4b\ud835\ude67\ud835\ude5e\ud835\ude6e\ud835\ude56\ud835\ude63\ud835\ude68\ud835\ude5d\x20\ud835\ude4d\ud835\ude56\ud835\ude5f\ud835\ude65\ud835\ude6a\ud835\ude69') {
        console.log('\x1b[33m[ \x57\x41\x52\x4e ]\x1b[37m » \x43\x68\x61\x6e\x67\x65\x20\x63\x72\x65\x64\x69\x74\x73\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x6d\x6f\x74\x68\x65\x72\x73\x20\x64\x69\x63\x6b\x2c\x20\x62\x69\x74\x63\x68\x3a))'+ global.config.BOTNAME + ' \x63\x68\x61\x6e\x67\x65\x20\x63\x72\x65\x64\x69\x74\x73\x20\x6d\x6f\x64\x75\x6c\x65\x73 "' + this.config.name + '"');
        return api.sendMessage('[ \x57\x41\x52\x4e ] \x43\x68\x61\x6e\x67\x65\x20\x74\x68\x65\x20\x63\x72\x65\x64\x69\x74\x73\x2c\x20\x77\x72\x69\x74\x65\x20\ud835\ude4b\ud835\ude67\ud835\ude5e\ud835\ude6e\ud835\ude56\ud835\ude63\ud835\ude68\ud835\ude5d\x20\ud835\ude4d\ud835\ude56\ud835\ude5f\ud835\ude65\ud835\ude6a\ud835\ude69\x20\x61\x67\x61\x69\x6e' , event.threadID, event.messageID);
    }

	var { threadID, messageID } = event;
	if (event.body.indexOf("@Priyansh Rajput")==0 || event.body.indexOf("@⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜0 || event.body.indexOf("@𝐘𝐔𝐕𝐈 𝐓𝐇𝐀𝐊𝐔𝐑")==0 || event.body.indexOf("𝐘𝐔𝐕𝐈 𝐓𝐇𝐀𝐊𝐔𝐑")==0) {
		var msg = {
				body: "𝐘𝐔𝐕𝐈 𝐓𝐇𝐀𝐊𝐔𝐑 ✨💖🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/Priyansh.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
