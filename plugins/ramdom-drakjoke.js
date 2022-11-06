let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let dr = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/darkjokes.txt')).text()
    let drx = dr.split('\n')
    let drk = pickRandom(drx)
	conn.sendFile(m.chat, drk, '', 'Dark nggak sih adick adick?', m)
}
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = true
handler.help = ['darkjokes']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}