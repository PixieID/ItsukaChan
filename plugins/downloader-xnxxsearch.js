const fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} Japanese`
		let res = await fetch(`https://malesin.xyz/xnxxsearch?q=${text}`)
		let rest = await res.json()
		let cap = `Hasil Pencarian Dari ${text}\n`
	for (let v of rest.result) {
	 cap += `• *Title :* ${v.title}
• *Info :* ${v.info}
• *Link :* ${v.link}
`
cap +=  '\n' + '---------------------------' + '\n'
    }
  m.reply(cap)
}
handler.help = ["xnxx", "xnxxsearch"].map(v => v + ' <query>')
handler.tags = ["downloader"]
handler.command = /^xnxx(s?earch)?$/i
handler.premium = true
module.exports = handler