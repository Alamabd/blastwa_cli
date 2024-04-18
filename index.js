#!/usr/bin/env node
const connectToWhatsApp = require('./utils/blash');
const chalk = require("chalk");
const readLine = require('./utils/readline');

const log = console.log;
log(chalk.bgBlue.white(" welcome ") + chalk.bgRed.white(" blast " + chalk.bgGreen.white(" whatsapp ")));
log(chalk.bgWhiteBright.black(" V1.0.0 "));
log();

readLine(data => {
  connectToWhatsApp(data.Number, data.msg, data.duration);
});