let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'pixel.png', 'yahahaha kotak kotak', m)
}

handler.help = ['pixel']
handler.command = /^(pixel)$/i
handler.limit = true

module.exports = handler