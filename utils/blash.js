const { DisconnectReason, useMultiFileAuthState, delay } = require('@whiskeysockets/baileys');
const makeWASocket = require('@whiskeysockets/baileys').default;
const chalk = require('chalk');

async function connectToWhatsApp(Number, msg, duration) {
  const { state, saveCreds } = await useMultiFileAuthState("auth_info_bailey");
    const sock = makeWASocket({
        printQRInTerminal: true,
        auth: state
    });

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update || {};
      if(qr) {
          console.log(qr);
      }
      if(connection === 'close') {
        const souldRecon = lastDisconnect?.error?.output?.statusCode != DisconnectReason.logged;
        if(souldRecon) {
          connectToWhatsApp();
        }
      }
      if(connection === 'open') {
        setTimeout(async () => {
          for(const num of Number) {          
            console.log(`sending: ${num}  ${chalk.bgCyan.white(" progress: ")} ${Number.indexOf(num) + 1}/${Number.length}`);
            await sock.sendMessage(`${num}@s.whatsapp.net`, msg);
            await delay(duration);
          }
          console.log("complete");
          process.exit();
        }, 2000);
      }
    })
          
    sock.ev.on("creds.update", saveCreds);
}

module.exports = connectToWhatsApp;
