const fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let res = await fetch(`https://malesin.xyz/xnxxdl?url=${text}`)
	if (res.status !== 200) throw 'Nice'
    let w = await res.json()
    let x = w.result
    let caption = `*💌 Title:* ${x.title}
*🗂️ Info:* ${x.info}
*📊 Duration:* ${x.duration}
    `
conn.sendFile(m.chat, x.image, 'fotonya.jpg', caption, m)
await m.reply(`Mohon tunggu sekitar 10 menit bot akan mengirimkan file nya`)
conn.sendFile(m.chat, x.files.low, 'xnxx.mp4', wm, m)
}
handler.help = ["xnxxdl-low"].map(v => v + ' <url>')
handler.tags = ["downloader"]
handler.command = /^(xnxxdl-low|dlxnxx-low)$/i
handler.premium = true
module.exports = handler