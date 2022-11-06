let handler  = async (m, { conn }) => {
conn.sendButton(m.chat, `Bot aktif kak, ketik #help untuk melihat menu`, wm, null, [['Menu', '.help']], m)
}
handler.customPrefix = /^(bot|tes123)$/i
handler.command = new RegExp
handler.limit = true
module.exports = handler