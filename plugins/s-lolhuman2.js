let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} kiss

*Random List*
• bully
• cuddle
• cry
• hug
• awoo
• kiss
• lick
• pat
• smug
• bonk
• yeet
• blush
• smile
• wave
• smile
• wave
• highfive
• handhold
• nom
• bite
• glomp
• kill
• slap
• happy
• wink
• poke
• dance
• cringe
• blush`)
let images = `https://api.lolhuman.xyz/api/random/${text}?apikey=${global.lolkey}`
await conn.sendFile(m.chat, images, 'random.webp', '', m, false, { asSticker: true })
}
handler.help = ['randomstik'].map(v => v + ' <options>')
handler.tags = ['tools']
handler.command = /^(randomstik)$/i
handler.limit = true 
module.exports = handler