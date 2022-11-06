let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let be = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/betees.txt')).text()
    let bet = be.split('\n')
    let bets = pickRandom(bet)
	conn.sendFile(m.chat, bets, '', 'Nih dek', m)
}
handler.command = /^(bts)$/i
handler.limit = true
handler.help = ['bts']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}