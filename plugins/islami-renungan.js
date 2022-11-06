let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
	let re = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/renungan.txt')).text()
    let ren = re.split('\n')
    let renung = pickRandom(ren)
  await conn.sendFile(m.chat, renung, 'renungan.jpeg', 'Nih renunganmu, jangan lupa dijadikan pelajaran yah buat masa depan nanti...', m)
}
handler.help = ['renungan']
handler.tags = ['islami']
handler.command = /^(renungan)$/i
handler.limit = true
handler.money = 3
handler.exp = 5
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}