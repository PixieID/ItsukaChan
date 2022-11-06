let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teksnya mana??'
  m.reply('Loading...')
  let res = `https://ziy.herokuapp.com/api/maker/LisaPresentation?text=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'lisa.jpg', wm, m)
}
handler.help = ['lisapresent'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(lisapresent)$/i
handler.limit = true
module.exports = handler