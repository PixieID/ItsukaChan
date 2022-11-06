let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {
	let th = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/random/taugasih.txt')).text()
    let thu = th.split('\n')
    let msk = pickRandom(thu)
	conn.reply(m.chat, msk, m)
}
handler.help = ['taugasih']
handler.tags = ['quotes']
handler.command = /^(taugasih)$/i
handler.limit = true
handler.money = 3
handler.exp = 5
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}