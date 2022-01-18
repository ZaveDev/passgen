#!/usr/bin/env node

const chalk = require("chalk");
const program = require("commander");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword.js");
const savePassword = require("./utils/savePassword.js");

program.version("1.0.0").description("simple password generator");

program
  .option("-l --length <number>", "Length of Password", "25")
  .option("-s --save", "Save Password to passwords.txt")
  .option("-nn --no-numbers", "Remove Numbers")
  .option("-ns --no-symbols", "Remove Symbols")
  .parse();

const { length, numbers, symbols, save } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

if (save) savePassword(generatedPassword);

clipboardy.writeSync(generatedPassword);

console.log(`${chalk.blue("Generated Password")}: ${generatedPassword}`);
console.log(chalk.yellow("Password copied to clipboard"));
