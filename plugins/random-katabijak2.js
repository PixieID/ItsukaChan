let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let bj = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/random/katabijax.txt')).text()
    let bja = bj.split('\n')
    let bjak = pickRandom(bja)
	conn.reply(m.chat, bjak, m)
}
handler.command = /^(katabijak)$/i
handler.limit = true
handler.help = ['katabijak']
handler.tags = ['quotes']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}