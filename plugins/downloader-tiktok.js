let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://vm.tiktok.com/ZSRtNxugp`
if (!args[0].includes("tiktok")) return m.reply(`Link Invalid`)
   let rest = await fetch(`https://malesin.xyz/tiktok?url=${args[0]}`)
   let res = await rest.json()
   let { title, author, video, audio, videoWM } = res
conn.sendFile(m.chat, video, 'tiktok.mp4', `*Tiktok Downloader*

*Title :* ${title}
*Link :* ${await shortlink(video)}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true
handler.command = /^(tt|tik(tok)?(dl)?)$/i
module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}