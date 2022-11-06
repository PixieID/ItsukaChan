let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'ceritahoror') {
let res = await fetch(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${global.lolkey}`)
  let sul = await res.json()
  let has = sul.result
  let tulisan = `
*Judul:* ${has.title}
*Desc:* ${has.desc}
*Story:* ${has.story}`
  await conn.sendFile(m.chat, has.thumbnail, '', tulisan, m)
}

if (command == 'gsmarena') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} oppo`
let res = await fetch(`https://api.lolhuman.xyz/api/gsmarena?apikey=${global.lolkey}&query=${text}`)
  let sul = await res.json()
  let has = sul.result
  let tulisan = `
*Name:* ${has.phone_name}
*Speed:* ${has.specification.network.speed}
*Launch:* ${has.specification.launch.status}
*Body:* ${has.specification.body.build}
*Dis status:* ${has.specification.display.displaytype}
*Plat:* ${has.specification.platform.os}
  ${has.specification.platform.chipset}
  ${has.specification.platform.cpu}
  *Mem:* ${has.specification.memory.internalmemory}
*Batre:* ${has.specification.battery.batdescription1}`
  await conn.sendFile(m.chat, has.phone_image, '', tulisan, m)
}

if (command == 'jalantikus') {
let f = await fetch(`https://api.lolhuman.xyz/api/jalantikus?apikey=${global.lolkey}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
*Name:* ${v.title}
*Time:* ${v.time}
*Link:* ${v.link}
*Category:* ${v.category}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  m.reply(teks)
}

}
handler.command = handler.help = ['ceritahoror', 'gsmarena', 'jalantikus']
handler.tags = ['tools']
handler.limit = true
module.exports = handler