let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => 
 {
  let res = await fetch(`https://api.lolhuman.xyz/api/neonimelatest?apikey=${global.lolkey}`)
  let res2 = await res.json()
  let cap = `*Neonime Update*\n`
  for (let json of res2.result) {
   cap += `*Title :* ${json.title} 
*Episode :* ${json.episode}
*Tanggal :* ${json.date}
*Link :* ${json.link}
`
cap += '\n' + '-----------------------------' + '\n'
  	}
  conn.reply(m.chat, cap, m)
}
handler.tags = ['tools']
handler.command = /^(animeupdate)$/i
handler.help = ['animeupdate']
handler.limit = 2
module.exports = handler