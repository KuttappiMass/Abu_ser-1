const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/mcVjXBN/IMG-20220120-WA0089.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✌︎ ❤️ᴀʙᴜ sᴇʀ ʙᴏᴛ ɢɪᴛ ʟɪɴᴋ 💙 ✌︎*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/917025994178

Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : ❤️🥰 ✌︎Aʙᴜ Sᴇʀ Bᴏᴛ ➪ Aʙᴜ»:-Jᴀsɪʟ ᴍᴜʜᴀᴍᴍᴇᴅ

Aʙᴜ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/Ajx-Abu/Abu_ser

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/Ajx-Abu/Abu_ser/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/Ajx-Abu/Abu_ser/tree/master/sticker

Cʜᴀɴɴᴇʟ : https://youtube.com/channel/UCWroqii8PORgNBdZO5MG6Fw 

💝Aʙᴜ Sᴇʀ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ Aʙᴜ Sᴇʀ -Jᴀsɪʟ ᴍᴜʜᴀᴍᴍᴇᴅ💝
`}) 

}));
