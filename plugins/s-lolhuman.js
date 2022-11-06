let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, args, usedPrefix, command }) => {
let type = (command).toLowerCase()

switch (type) {
case 'dadu':
  conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${global.lolkey}`, 'dadu.webp', '', m, false, { asSticker: true })
break

case 'patrik':
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/patrick?apikey=${global.lolkey}`, 'patrik.webp', '', m, false, { asSticker: true })
break

case 'amongus':
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/amongus?apikey=${global.lolkey}`, 'amongus.webp', '', m, false, { asSticker: true })
break

case 'gurastik':
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${global.lolkey}`, 'gura.webp', '', m, false, { asSticker: true })
break

case 'dogestik':
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/anjing?apikey=${global.lolkey}`, 'gura.webp', '', m, false, { asSticker: true })
break

case 'bucinstik':
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${global.lolkey}`, 'gura.webp', '', m, false, { asSticker: true })
break

default:
 }
}
handler.command = handler.help = [
'dadu',
'patrik',
'bucinstik',
'dogestik',
'gurastik',
'amongus']
handler.tags = ['sticker']
handler.limit = true

module.exports = handler