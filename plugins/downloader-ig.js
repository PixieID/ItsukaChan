let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_source=ig_web_copy_link`
    if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_source=ig_web_copy_link`
    let igh = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${args[0]}`)
    let ige = await igh.json()
    conn.sendFile(m.chat, ige.result, 'instragram.mp4', `🔗 *Url:* ${await shortlink(ige.result)}`, m)
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.group = true
module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}