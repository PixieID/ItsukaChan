const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/nsfw/trap`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendFile(m.chat, json.url, '', `Nih dek`, m)
}
handler.command = handler.help = [
'trap']
handler.tags = ['18+']
handler.limit = 3

module.exports = handler