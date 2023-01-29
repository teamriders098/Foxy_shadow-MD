require('./config.js')
require('./system/system/index.js')
const fs = require('fs')
const chalk = require('chalk')

// menu command 
global.menu = {
          react: "🔥", // react when you use this command
          symbol: "┎",
          symbol1: "┃",
          symbol2: "┖",
          infoTxt1: "*User Name :*",
          infoTxt2: "*User Number :*",
          infoTxt3: "*Bot Name :*",
          infoTxt4: "*Bot Speed :*",
          infoTxt5: "*Bot Runtime :*",
          infoTxt6: "*Owner Name :*",
          infoTxt7: "*Host Name :*",
          footerTxt: "Please choose the buttons below 🌟", // put 𝗳𝗼𝗼𝘁𝗲𝗿 for default footer text / put 𝗯𝗼𝘁𝗻𝗮𝗺𝗲 to show this bot's name / put 𝗽𝘂𝘀𝗵𝗻𝗮𝗺𝗲 to automatically insert message sender name / put any word with " in their starting and ending text to show that word 𝗘𝘅𝗮𝗺𝗽𝗹𝗲: "hello this is pika"
          buttonId1: "allmenu", // button 1 command name
          buttonId2: "listmenu", // button 2 command name
          buttonId3: "allmenu2", // button 3 command name
          buttonTxt1: "𝘈𝘭𝘭 𝘔𝘦𝘯𝘶 📄", // button 1 text
          buttonTxt2: "𝘓𝘪𝘴𝘵 𝘔𝘦𝘯𝘶 🐤", // button 2 text
          buttonTxt3: "𝘉𝘶𝘵𝘵𝘰𝘯-𝘓𝘪𝘴𝘵 𝘔𝘦𝘯𝘶 🥵", // button 3 text
          document: fs.readFileSync('./FoxyMedia/system/files/Foxy.xlsx'),
          thumbnail: thumbnails, // don't change it here, change it in config.js file
          thumbnailUrl: "https://youtu.be/WgTMeICssXY",  // please only insert YouTube video links
          showAdMark: "true", // 𝗔𝗱 mark on upper left side (true, for enable / false, to disable)
          description: "This command is a *starter point* of this bot, you can choose *three menu types* in this command!",
}

const _0x43041a=_0x3cab;(function(_0x39bb5b,_0x57ffc9){const _0x1039b0=_0x3cab,_0x3efa42=_0x39bb5b();while(!![]){try{const _0x278313=-parseInt(_0x1039b0(0x10b))/0x1*(-parseInt(_0x1039b0(0x108))/0x2)+parseInt(_0x1039b0(0x10c))/0x3+-parseInt(_0x1039b0(0x109))/0x4+parseInt(_0x1039b0(0x114))/0x5*(-parseInt(_0x1039b0(0x10f))/0x6)+parseInt(_0x1039b0(0x10d))/0x7+parseInt(_0x1039b0(0x110))/0x8*(parseInt(_0x1039b0(0x112))/0x9)+-parseInt(_0x1039b0(0x10e))/0xa;if(_0x278313===_0x57ffc9)break;else _0x3efa42['push'](_0x3efa42['shift']());}catch(_0x434e6b){_0x3efa42['push'](_0x3efa42['shift']());}}}(_0xbed4,0x424b4));function _0xbed4(){const _0x259a6c=['resolve','336730dpTCSL','1797652zNKcgO','log','2AZjTMN','921912UFungN','2161201RtkYZl','3673320ntKHCM','6VHKTEw','40UaKFDI','cache','824463UdQgYd','Update\x27','1612635KswvBB'];_0xbed4=function(){return _0x259a6c;};return _0xbed4();}function _0x3cab(_0x404324,_0x816965){const _0xbed400=_0xbed4();return _0x3cab=function(_0x3cabe8,_0x124ca3){_0x3cabe8=_0x3cabe8-0x108;let _0x30e5f8=_0xbed400[_0x3cabe8];return _0x30e5f8;},_0x3cab(_0x404324,_0x816965);}let file=require[_0x43041a(0x115)](__filename);fs['watchFile'](file,()=>{const _0x326269=_0x43041a;fs['unwatchFile'](file),console[_0x326269(0x10a)](chalk['redBright'](_0x326269(0x113)+__filename+'\x27')),delete require[_0x326269(0x111)][file],require(file);});
