// Module package External
import { v4 as uuidv4 } from "uuid";
const random = uuidv4();
console.log("random", random);

import chalk from "chalk";
const log = console.log;
log(chalk.blue("Hello") + random + chalk.red("!"));
log(chalk.red(`uuid creates ${random}`));
/*
// uuidv4


// validator

import validator from "validator";

const checkIP = validator.isIP("114.30.35.15g43");
console.log("result:", checkIP);

const checkInt = validator.isInt("sdfg");
console.log("result:", checkInt);

const test = validator.isEmail("yo@yo.com");
console.log("test:", test);

// inquirer

import inquirer from "inquirer";

inquirer
  .prompt([{ type: "input", name: "number", message: "Type in the number!" }])
  .then((answer) => {
    console.log(`The value of the number I typed => ${answer.number}`);
  })
  .catch((err) => console.log(err));


const moment = require("moment");
// console.log(time);

setInterval(() => {
  const time = moment().format();
  console.log("time now =>", time);
}, 5000);

// Module package Core

const fs = require("fs");
const { netWorkInterfaces } = require("os");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

console.log("===============");

fs.writeFileSync("./input.txt", `${data} \n\t\t by Aliy`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);
let number = 0;
setInterval(function () {
  console.log("Number =>", number);
  number++;
}, 0);

setTimeout(function () {
  console.log("working!");
}, 5000);
*/

// Module package File
