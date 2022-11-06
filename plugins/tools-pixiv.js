let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh:\n ${usedPrefix + command} Loli Kawaii`
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/pixiv?apikey=${global.lolkey}&query=${text}`, 'pixiv.jpeg', `Search from ${text}\n\n${global.wm}`, m)
}

handler.help = ['pixivsearch']
handler.tags = ['internet']
handler.command = /^(pixivsearch)$/i
handler.limit = 3
module.exports = handler