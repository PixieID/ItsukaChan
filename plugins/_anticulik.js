let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*• INVITE GROUP •*

• 1 Minggu 5k
• 1 Bulan / Rp 15k

⩩ 𝗣𝗔𝗬♡
┈┈┈┈┈┈┈         ͜͡               𖤣
➘
    *Only*            ☁︎     ♡
    *Dana*                        ✧
                  இ
✧
┬ 📮 Note :
│ ɪ ᴍᴀʏ ʙᴇ ꜱʟᴏᴡ ᴛᴏ ʀᴇꜱᴘᴏɴᴅ ˄.  ̫.˄
╰━━━━━━━━━━━━━━━━┈─◂
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}
module.exports = handler