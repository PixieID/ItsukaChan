let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

   let regs = /(ผิดุท้เึางืผิดุท้เึางื)/i
   let isVertexThai = regs.exec(m.text)
   if (isVertexThai && !m.fromMe) {
   conn.sendMessage(m.chat, { delete: m.key })
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regk = /(♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚)/i
   let isVertexSymbol = regk.exec(m.text)
   if (isVertexSymbol && !m.fromMe) {
   conn.sendMessage(m.chat, { delete: m.key })
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regp = /(๒๒)/i
   let isVertexsThai= regp.exec(m.text)
   if (isVertexsThai && !m.fromMe) {
   conn.sendMessage(m.chat, { delete: m.key })
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regpz = /(৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ)/i
   let isVertexsAll = regpz.exec(m.text)
   if (isVertexsAll && !m.fromMe) {
   conn.sendMessage(m.chat, { delete: m.key })
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   // tambahin sendiri code virus WhatsApp.. Contohnya di bawah
  
   // let abc1 = /(virusnya)/i
   // let abc2 = abc1.exec(m.text)
   // if (abc2 && !m.fromMe) {
   // conn.sendMessage(m.chat, { delete: m.key })
   // conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   // }
}

handler.botAdmin = true
handler.group = true
module.exports = handler