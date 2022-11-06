let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let ex = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/exo.txt')).text()
    let exo = ex.split('\n')
    let exoo = pickRandom(exo)
	conn.sendFile(m.chat, exoo, '', 'Nih dek', m)
}
handler.command = /^(exo)$/i
handler.limit = true
handler.help = ['exo']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}