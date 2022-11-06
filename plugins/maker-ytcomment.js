let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm... teksnya mana?'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => ''),
    comment: text,
    username: m.pushName
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['maker']
handler.command = /^(ytcomment)$/i
handler.limit = true
module.exports = handler