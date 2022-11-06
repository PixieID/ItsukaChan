let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => 
 {
 if (!args[0]) throw `Contoh:\n${usedPrefix + command} Date A Live`
  let res = await fetch(`https://api.lolhuman.xyz/api/kusonimesearch2?apikey=${global.lolkey}&query=${args[0]}`)
  let res2 = await res.json()
  let cap = `*Kusonime Search*\n`
  for (let json of res2.result) {
   cap += `*Title :* ${json.title} 
*Genre :* ${json.genre}
*Link :* ${json.link}
`
cap += '\n' + '-----------------------------' + '\n'
  	}
  conn.reply(m.chat, cap, m)
}

handler.help = ['kusonime'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.limit = 2
handler.group = true
handler.command = /^(kusonime)$/i
module.exports = handler