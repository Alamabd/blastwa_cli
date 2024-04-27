const fs = require('fs');

function readfile(path) {
    const data = fs.readFileSync(path, {encoding: "utf-8"});
    return JSON.parse(data);
}

module.exports = readfile;