let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let mot = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/random/motivasi.txt')).text()
    let moti = mot.split('\n')
    let motiv = pickRandom(moti)
	conn.reply(m.chat, motiv, m)
}
handler.command = /^(motivasi)$/i
handler.limit = true
handler.help = ['motivasi']
handler.tags = ['islami']
handler.money = 3
handler.exp = 5
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}