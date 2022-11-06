const { nomorhoki } = require('@bochilteam/scraper')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} 62xxxxxxx`
    const result = await nomorhoki(text)
let nohoki = `
*NOMOR:* ${result.nomer}
*ANGKA BAGUA SHUZI:* ${result.angka_bagua_shuzi}

*POSITIF:* ${result.positif.positif}
*KEKAYAAN:* ${result.positif.kekayaan}
*KESEHATAN:* ${result.positif.kesehatan}
*CINTA:* ${result.positif.cinta}
*KESTABILAN:* ${result.positif.kestabilan}

*NEGATIF:* ${result.negatif.negatif}
*PERSELISIHAN:* ${result.negatif.perselisihan}
*KEHILANGAN:* ${result.negatif.kehilangan}
*MALAPETAKA:* ${result.negatif.malapetaka}
*KEHANCURAN:* ${result.negatif.Kehancuran}
`
await conn.reply(m.chat, nohoki, m)
}

handler.help = ['nomorhoki'].map(v => v + ' <number>')
handler.tags = ['internet']
handler.command = /^(nomorhoki)$/i
handler.limit = true

module.exports = handler