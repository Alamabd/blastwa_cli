const fs = require('fs');
const chalk = require('chalk');
const xlsx = require('xlsx');

function readfile(path) {
    try {
        if(typeof path ===  'string') {
            const arg = path.split(" ");
            const ext = arg[0].split(".");
            if(ext[1] === "xlsx") {
                const workbook = xlsx.readFile(arg[0]);
                const sheetName = workbook.SheetNames[parseInt(arg[1]) - 1 || 0];
                const sheet = workbook.Sheets[sheetName];
                const datas = xlsx.utils.sheet_to_json(sheet);
                return result = datas.map(data => Object.values(data)[0].toString());
            }
            else if (ext[1] === "txt" || ext[1] === "json") {
                const data = fs.readFileSync(path, {encoding: "utf-8"});
                return JSON.parse(data);
            } else {
                throw new Error("Cannot support file extension");
            }
        }
    } catch (error) {
        console.log(`\n${chalk.bgRed.white(" Error ")} ${error.message}`);
        console.log(chalk.bgBlue.white("  Try  ") + " Command: blast -h");
        process.exit();   
    }
}

module.exports = readfile;