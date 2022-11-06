let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, args, command }) => {
  if (!args[0]) throw `Harap masukkan code sebagai parameter!\n\nContoh: ${usedPrefix + command} 304307`
  let res1 = await fetch(global.API('lol', `/api/nhentai/${args[0]}`, {}, 'apikey'))
  if (!res1.ok) throw await res1.text()
  let json = await res1.json()
  let ayaka = `
Doujin Downloader
Code: ${args[0]}
Native: ${json.result.title_native}
`.trim()
let thumbnail = await(await fetch(json.result.image[0])).buffer()
let poi = await(await fetch(json.result.image[0])).buffer()
await conn.reply(m.chat, ayaka, m )
let res2 = await fetch(global.API('lol', `/api/nhentaipdf/${args[0]}`, {}, 'apikey'))
  let hakta = await res2.json()
  await conn.sendFile(m.chat, hakta.result, 'ItsukaChan' + ' ' + `${args[0]}` + '.pdf', '', m, false, { asDocument: true, thumbnail: thumbnail})
}
handler.tags = ['18+']
handler.command = /^(nhpdf|nhentai|doujin)$/i
handler.help = ['nhpdf <code>']
handler.premium = true
module.exports = handler
