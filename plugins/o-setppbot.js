let { webp2png } = require('../lib/webp2mp4.js')

let handler = async (m, { conn, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
    let url = await webp2png(await q.download())
    await conn.updateProfilePicture(conn.user.jid, { url }).then(_ => m.reply('Done...'))
  } else if (args[0] && /https?:\/\//.test(args[0])) {
    await conn.updateProfilePicture(conn.user.jid, { url: args[0] }).then(_ => m.reply('Done...'))
  } else throw 'Where\'s the media?'
}

handler.help = ['setppbot']
handler.tags = ['owner']
handler.command = /^setppbot$/i
handler.owner = true

module.exports = handler