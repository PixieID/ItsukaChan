let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let rules = await (await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/bot/rules.txt')).text()
	conn.reply(m.chat, `*Hai kak @${m.sender.split`@`[0]} 👋, dibaca ya rulesnya*\n\n${rules}`, m)
}
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules|peraturan)$/i
handler.exp = 6
handler.limit = true
module.exports = handler