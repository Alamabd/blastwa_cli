const { DisconnectReason, useMultiFileAuthState, delay } = require('@whiskeysockets/baileys');
const makeWASocket = require('@whiskeysockets/baileys').default;
const chalk = require('chalk');

async function connectToWhatsApp(data) {
  console.log(data);
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
        for(const num of data.number) {          
          await sock.sendMessage(`${num}@s.whatsapp.net`, data.msg);
          console.log(`sending: ${num}  ${chalk.bgCyan.white(" progress: ")} ${parseInt(data.number.indexOf(num)) + 1}/${data.number.length}`);
          await delay(data.interval);
        }
        console.log("complete");
        process.exit();
      }, 2000);
    }
  })
        
  sock.ev.on("creds.update", saveCreds);
}

module.exports = connectToWhatsApp;
