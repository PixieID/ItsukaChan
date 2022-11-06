let axios = require("axios")
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)
    await m.reply('Searching...')
	axios.get(`https://api.lolhuman.xyz/api/tebakumur?apikey=${global.lolkey}&name=${text}`).then ((res) => {
	 	let hasil = `Namamu : ${text}\nUmurmu : ${res.data.result.age}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tebakumur'].map(v => v + ' <nama>')
handler.tags = ['fun']
handler.command = /^(tebakumur)$/i
handler.money = 3
handler.exp = 5
handler.limit = true
module.exports = handler