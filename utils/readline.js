const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function readLine(data) {
    rl.question("Masukkan file nomor: ", fileNumber => {
      rl.question("Masukkan file pesan: ", fileMsg => {
        rl.question("Masukkan durasi pengiriman: ", duration => {
          const typeFile = fileNumber.split(".")[1];
          if (typeFile === "txt" || typeFile === "json") {
            try {
              const Number = JSON.parse(fs.readFileSync(fileNumber, "utf-8"));
              const msg = JSON.parse(fs.readFileSync(fileMsg, "utf-8"));
              if(!isNaN(duration)) {
                data({Number, msg, duration});
              } else {
                console.log(chalk.bgRed.white(" Error ") + " Duration is not number!!");
                console.log();
              }
            } catch (error) {
              console.log(chalk.bgRed.white(" Error ") + " File tidak ada mohon arahkan dengan sesuai!!");
              console.log();
            }
          } else {
            console.log(chalk.bgRed.white(" Error ") + " Format file not support, please use json or txt");
            console.log();
          }
          rl.close();
        })
      })
    })
}


module.exports = readLine;