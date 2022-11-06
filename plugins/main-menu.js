const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'rpgabsen': 'Rpg-Absen',
  'rpg': 'Rpg Menu',
  'game': 'Game Menu',
  'xp': 'Exp, Limit & Pay',
  'sticker': 'Sticker',
  'main': 'Main',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'downloader': 'Downloader',
  'berita': 'Berita',
  'tools': 'Tools',
  'wibu': 'Anime',
  'fun': 'Fun',
  'database': 'Database', 
  'vote': 'Voting',
  'absen': 'Absen',
  'catatan': 'Catatan',
  'jadian': 'Jadian',
  'islami': 'Islami',
  'owner': 'Owner',
  'advanced': 'Advanced',
  'info': 'Info',
  'audio': 'Audio',
  'maker': 'Maker',
  '18+': 'Nsfw Menu',
}
const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···•
┴│•︎ *Name:* %name
⬡│•︎ *Limit:* %limit
⬡│• *Role:* %role
⬡│•︎ *Level:* %level [ %xp4levelup Xp For Levelup ]
⬡│•︎ *Xp:* %exp / %maxexp
┬│•︎ *Total Xp:* %totalexp
│╰────────────────···•
%readmore
┠─────═[ TODAY ]═─────⋆
│╭────────────────···•
┴│    *%ucapan %name!*
⬡│•︎ *Tanggal:* %week %weton
⬡│• *Date:* %date
┬│• *Waktu:* %time
│╰────────────────···•
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···•
┴│• *Nama Bot:* ItsukaChan
⬡│•︎ *Mode:* Publik
⬡│• *Prefix:* [ *%p* ]
⬡│• *Baileys:* Multi Device
⬡│•︎ *Type:* Node.Js
⬡│•︎ *Version:* %version
⬡│•︎ *Uptime:* %uptime (%muptime)
┬│• *Database:* %rtotalreg dari %totalreg
│╰────────────────···•
┠─────═[ WAKTU ]═─────⋆
│╭────────────────···•
┴│•︎ *Waktu Indonesia:*
⬡│• *WIB:* %wib
⬡│• *WITA:* %wita
┬│•︎ *WIT:* %wit
│╰────────────────···•
╰──────────═┅═──────────

⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
`.trimStart(),
  header: '❏––––––『 *%category* 』––––––❏',
  body: '┊↬ %cmd %islimit %isPremium',
  footer: '┗––––––––––✦\n',
  after: `Follow :\nTikTok : @pnggilajacn\nInstragram : @tiktok.pnggilajacn\n\n*Note*\nFitur nggak semuanya bisa ya dek\njadi tunggu gw fix fiturnya\n\n© 𝙄𝙩𝙨𝙪𝙠𝙖𝘽𝙤𝙩-𝙈𝙙 | 𝘾𝙝𝙖𝙣𝙙𝙧𝙖 𝙓𝘿
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
/*   conn.sendMessage(m.chat, { image: fs.readFileSync('./media/bawah.jpg'), caption: text.trim(), contextInfo: { externalAdReply: { showAdAttribution: true, 
    renderLargerThumbnail: true,
    containsAutoReply: true,
    mediaType:1, 
    mediaUrl: `https://youtu.be/6Dua0GTlYCc`, 
    thumbnail: await (await fetch(`https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/media/image/atas.jpg`)).buffer()
 }}}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': '            「 ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 汉  」', 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Omagattt,;;;\nFN:Gueh bilek,\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}} })*/
 conn.reply(m.chat, text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allmenu|menu|help|\?)$/i
handler.exp = 6
handler.limit = 5
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Ohayou...'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Ohayou...'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Konbanwa...'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Konbanwa...'
        } else {
          ucapanWaktu = 'Konbanwa'
        }	
        return ucapanWaktu
}