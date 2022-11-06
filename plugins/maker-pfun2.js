let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) return m.reply(`Example : ${usedPrefix + command} choror|helo|banh

*List Efek:*
neon
lifebuoy
arrow-signs
snow_writing
cinema-ticket
birthday-cake
movie_marquee`)
let urut = text.split`|`
let thm = urut[0]
let text1 = urut[1]
let text2 = urut[2]
let images = `https://violetics.pw/api/photofunia/${thm}?apikey=${global.viokey}&text=${text1}&text2=${text2}`
await conn.sendFile(m.chat, images, '', wm, m)
            }

handler.command = /^(pfunia2|pfun2)$/i
handler.help = ['pfunia2']
handler.tags = ['maker']
handler.limit = true

module.exports = handler