let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/neko.txt')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	conn.sendFile(m.chat, neko, '', 'Stress', m)
}
handler.command = /^(neko3)$/i
handler.limit = 3
handler.help = ['neko3']
handler.tags = ['18+']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}