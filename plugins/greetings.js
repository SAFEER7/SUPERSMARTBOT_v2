if (config.WELCOME == 'pp' || config.WELCOME == 'Pp' || config.WELCOME == 'PP' || config.WELCOME == 'pP' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome with porfile pic {Ravindu Manoj}
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye with porfile pic {Ravindu Manoj}
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
               let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        }
    }
    else if (config.WELCOME == 'gif' || config.WELCOME == 'Gif' || config.WELCOME == 'GIF' || config.WELCOME == 'GIf' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome with gif {Ravindu Manoj}
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                var sewqueenimage = await axios.get(config.WLP, { responseType: 'arraybuffer' })
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye with gif  {Ravindu Manoj}
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
            var sewqueenimage = await axios.get(config.GDB, { responseType: 'arraybuffer' })
            await conn.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        }
     }
