/*coded by safeer
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  ENTHENKILUM EZHUTH NENBA"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'aveng ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=SuperSmartBOT&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'matrix ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=TqFyJhzDvqftPnM63RQsWGwOdXZ&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
    
}
