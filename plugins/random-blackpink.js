let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let blek = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/blekping.txt')).text()
    let blk = blek.split('\n')
    let hitam = pickRandom(blk)
	conn.sendFile(m.chat, hitam, '', 'Nih dek gimana keren nggak?', m)
}
handler.command = /^(blackpink)$/i
handler.limit = true
handler.help = ['blackpink']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}