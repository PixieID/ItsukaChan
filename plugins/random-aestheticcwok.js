let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let ext = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/cowok.txt')).text()
    let extx = ext.split('\n')
    let exv = pickRandom(extx)
	conn.sendFile(m.chat, exv, '', 'Nih dek gimana keren nggak?', m)
}
handler.command = /^(aestheticcowok|aestheticcwk)$/i
handler.limit = true
handler.help = ['aestheticcowok']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}