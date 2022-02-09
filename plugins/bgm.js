/* Copyright (C) 2021 afnanplk
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'EN') {
        l_dsc = 'turn on and turn off bgm. -bot owner command'
        BGM_on = '😋Aʙᴜ Sᴇʀ Bɢᴍ Oᴘᴛɪᴏɴ Oɴ Aᴋɪᴛᴜɴᴅ Iᴘᴘᴏ Vᴀʀᴜᴍ Bɢᴍs😋!'
        BGM_off = 'Aʙᴜ Sᴇʀ Bɢᴍ Oᴘᴛɪᴏɴ Oғғ Aᴋɪᴛᴜɴᴅ Iɴɪ  Bɢᴍs Oɴᴜᴍ Vᴀʀɪʟʟᴀ😋'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'bgm ഓണാക്കുക അല്ലെങ്കിൽ ഓഫ് ചെയ്യുക. -ബോട്ട് ഉടമ കമാൻഡ്'        
        BGM_on = 'bgm ഓപ്ഷൻ ഓണാക്കി'
        BGM_off = 'bgm ഓപ്ഷൻ ഓഫാക്കി'
    }
    Asena.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: l_dsc, usage: '.bgm on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));
