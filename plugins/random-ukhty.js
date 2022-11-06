let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let uk = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/ukhty.txt')).text()
    let ukh = uk.split('\n')
    let ukht = pickRandom(ukh)
	conn.sendFile(m.chat, ukht, '', 'Nih dek gimana keren nggak?', m)
}
handler.command = /^(cecanukhty|ukhty)$/i
handler.limit = true
handler.help = ['cecanukhty']
handler.tags = ['random']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}