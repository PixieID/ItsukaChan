let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, args, usedPrefix, command }) => {
let type = (command).toLowerCase()

switch (type) {
case 'waifu2':
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Istri kartun', m)
break

case 'neko2':
  let _neko = await fetch('https://api.waifu.pics/sfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw 'Error!'
  conn.sendFile(m.chat, neko.url, '', 'Dasar furry', m)
break 

case 'megumin':
  let _megumin = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!_megumin.ok) throw await _megumin.text()
  let megumin = await _megumin.json()
  if (!megumin.url) throw 'Error!'
  conn.sendFile(m.chat, megumin.url, '', 'Istri kartun', m)
break

case 'trap2':
  let trap = await fetch('https://waifu.pics/api/nsfw/trap')
  if (!trap.ok) throw await trap.text()
  let trap2 = await trap.json()
  if (!trap2.url) throw 'Error!'
  conn.sendFile(m.chat, trap2.url, '', 'Stress lu', m)
break

case 'spank':
  let spa = await fetch('https://nekos.life/api/v2/img/spank')
  if (!spa.ok) throw await spa.text()
  let spa2 = await spa.json()
  if (!spa2.url) throw 'Error!'
  conn.sendFile(m.chat, spa2.url, '', 'Stress lu', m)
break

case 'neko4':
  let nel = await fetch('https://nekos.life/api/v2/img/neko')
  if (!nel.ok) throw await nel.text()
  let nel2 = await nel.json()
  if (!nel2.url) throw 'Error!'
  conn.sendFile(m.chat, nel2.url, '', 'Stress lu', m)
break

case 'animenom':
  let xzv = await fetch('https://waifu.pics/api/sfw/nom')
  if (!xzv.ok) throw await xzv.text()
  let xzv2 = await xzv.json()
  if (!xzv2.url) throw 'Error!'
  conn.sendFile(m.chat, xzv2.url, '', 'Stress lu', m)
break

case 'nwaifu':
  let glk = await fetch('https://waifu.pics/api/nsfw/waifu')
  if (!glk.ok) throw await glk.text()
  let glk2 = await glk.json()
  if (!glk2.url) throw 'Error!'
  conn.sendFile(m.chat, glk2.url, '', 'Stress lu', m)
break

case 'hneko':
  let mnb = await fetch('https://waifu.pics/api/nsfw/neko')
  if (!mnb.ok) throw await mnb.text()
  let mnb2 = await mnb.json()
  if (!mnb2.url) throw 'Error!'
  conn.sendFile(m.chat, mnb2.url, '', 'Stress lu', m)
break

default:
 }
}
handler.command = handler.help = [
'waifu2',
'neko2',
'trap2',
'spank',
'neko4',
'animenom',
'nwaifu',
'hneko',
'megumin']
handler.tags = ['18+']
handler.limit = 3

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}