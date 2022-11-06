let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`Limit kamu tinggal ${global.db.data.users[who].limit} lagi >//<\nJika bot tidak merespon chat kamu berarti limit kamu sudah habis\nSilahkan chat owner untuk membeli limit atau upgrade premium`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler