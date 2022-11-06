let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let ce = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/cecan.txt')).text()
    let cec = ce.split('\n')
    let ceca = pickRandom(cec)
	conn.sendFile(m.chat, ceca, '', 'Nih dek gimana keren nggak?', m)
}
handler.command = /^(cecanrandom)$/i
handler.limit = true
handler.help = ['cecanrandom']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}