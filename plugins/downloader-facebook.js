const { facebookdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya mana ? Contoh :\n${usedPrefix}${command} https://www.fb.com/watch/?v=2042293205967547`
    const { result } = await facebookdlv2(args[0])
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'mp4' : 'bin'}`, `🔗 *Url:* ${await shortlink(url)}`, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}

/* const { facebookdl, facebookdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler

 let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	// let res = await fetch(`https://madangsek.my.id/facebook/?url=` + args[0])
	let res = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.result.hd.url
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', author, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler
*/