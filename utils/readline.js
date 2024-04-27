const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function readLine(query, data) {
    rl.question(query, answer => {
      data(answer);
    })
}


module.exports = readLine;