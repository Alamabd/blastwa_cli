const { DisconnectReason, useMultiFileAuthState, delay } = require('@whiskeysockets/baileys');
const makeWASocket = require('@whiskeysockets/baileys').default;
const chalk = require('chalk');

async function connectToWhatsApp(data) {
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
        try {
          if(typeof data.number === 'object') {
            if(!isNaN(data.interval)) {
              for(const [idx, num] of data.number.entries()) {
                if(typeof num === 'number' || typeof num === 'string') {
                  const valNum = num.toString();
                  try {
                    await sock.sendMessage(`${valNum}@s.whatsapp.net`, data.msg);
                  } catch (error) {
                    console.log();
                    console.log(`${chalk.bgRed.white(" Error ")} Failed message data`);
                    console.log(chalk.bgBlue.white("  Try  ") + " Command: blast -h");
                    process.exit();
                  }
                  console.log(`sending: ${num}  ${chalk.bgCyan.white(" progress: ")} ${idx + 1}/${data.number.length}`);
                  await delay(data.interval);
                } else {
                  throw new Error("Failed number typedata");
                }
              }
              console.log("complete");
              process.exit();
            } else {
              throw new Error(`Failed interval\n${data.interval}`);
            }
          } else {
            throw new Error(`Failed number format\n${data.number}`);
          }
        } catch (error) {
          console.log();
          console.log(`${chalk.bgRed.white(" Error ")} ${error.message}`);
          console.log(chalk.bgBlue.white("  Try  ") + " Command: blast -h");
          process.exit();
        }
      }, 2000);
    }
  })
        
  sock.ev.on("creds.update", saveCreds);
}

module.exports = connectToWhatsApp;
