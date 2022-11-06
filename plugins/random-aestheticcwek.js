let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let cw = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/cewek.txt')).text()
    let cwx = cw.split('\n')
    let cwk = pickRandom(cwx)
	conn.sendFile(m.chat, cwk, '', 'Nih dek gimana keren nggak?', m)
}
handler.command = /^(aestheticcewek|aestheticcwek)$/i
handler.limit = true
handler.help = ['aestheticcewek']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}