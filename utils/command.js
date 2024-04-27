const chalk = require("chalk");
const readLine = require("./readline");
const connectToWhatsApp = require("../lib/blash");
const rf = require('./readfile');

const log = console.log;

function command(args) {
    if(args.length === 2) {
        log(`         ___ __            
        |   _  \\ _            _
        |  |_|  | | __ __ ___| |
        |   _  /  |/  _  | __|  |
        |  |_|  | |  |_| |__ \\ |__
        |______/|_|\\___-_|_ _/__ /\n`);

        log(chalk.white(chalk.bgBlue(" welcome ") + chalk.bgRed(" blast ") + chalk.bgGreen(" whatsapp ")));
        log(" made by alam");
        log(" Command available;")
        log(" 1. start: for start blash");
        log(" 2. -h: for help");
        log(" 2. -v: for version");
        process.exit();
    } 
    else if(args[2] === "start") {
        log("BLAST made by alam\n");
        readLine("Enter file number: ", number => {
            readLine("Enter message file: ", msg => {
                readLine("Add interval duration: ", interval => {
                    const data = {
                        number: rf(number),
                        msg: rf(msg),
                        interval
                    }
                    connectToWhatsApp(data);
                })
            })
        });
    }
    else if(args[2] === "-h") {
        log("BLAST made by alam\n");
        log(chalk.bgRed.white(" HELP FOR START"));
        log("1. Create two files for numbers and messages");
        log("2. Use txt, json, or xlsx format");
        log("3. Start with: blast start\n");
        process.exit();
    }
    else if(args[2] === "-v") {
        log("BLAST made by alam\n");
        log("v1.0.0\n");
        process.exit();
    }
    else {
        console.log(chalk.bgRed.white(" Error ") + " Command not found!!");
        console.log(chalk.bgBlue.white("  Try  ") + " Command: blast\n");
        process.exit();
    }
}

module.exports = command;