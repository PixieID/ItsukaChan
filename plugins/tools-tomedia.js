let uploadImage = require('../lib/uploadImage.js')
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (command == 'towebp') {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/towebp?apikey=${global.lolkey}&img=${url}`
await conn.sendFile(m.chat, res, 'out.webp', m, false, { mimetype: 'image/webp', thumbnail: Buffer.alloc(0) })
    }
    
if (command == 'towebpr') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`

    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${global.lolkey}&img=${url}`
await conn.sendFile(m.chat, res, 'out.webp', m, false, { mimetype: 'image/webp', thumbnail: Buffer.alloc(0) })
}

}
handler.command = handler.help = ['towebp', 'towebpr']
handler.tags = ['tools']
handler.limit = true
module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
