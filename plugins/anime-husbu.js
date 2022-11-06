let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let hu = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/husbu.txt')).text()
    let hus = hu.split('\n')
    let husbu = pickRandom(hus)
	conn.sendFile(m.chat, husbu, '', 'Hanya kartun dek', m)
}
handler.command = /^(husbu)$/i
handler.limit = true
handler.tags = ['wibu']
handler.help = ['husbu']
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}