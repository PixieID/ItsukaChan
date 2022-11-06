let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let ayatkursi = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/random/ayatkursi.txt')).text()
conn.reply(m.chat, `${ayatkursi}`, m)
}
handler.help = ['ayatkursi']
handler.tags = ['islami']
handler.command = /^(ayatkursi)$/i
module.exports = handler
