// Module package External

// uuidv4 && // Chalk
const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random:", random);

const chalk = require("chalk");
const log = console.log;
log(chalk.blue("Hello") + random + chalk.red("!"));
log(chalk.red(`uuid creates ${random}`));

// validator

const validator = require("validator");

const checkIP = validator.isIP("114.30.35.15g43");
console.log("result:", checkIP);

const checkInt = validator.isInt("1");
console.log("result:", checkInt);

const test = validator.isEmail("yo@yo.com");
console.log("test:", test);

// inquirer

const inquirer = require("inquirer");

inquirer
  .prompt([{ type: "input", name: "number", message: "Type in the number!" }])
  .then((answer) => {
    console.log(`The value of the number I typed => ${answer.number}`);
  })
  .catch((err) => console.log(err));

const moment = require("moment");

setInterval(() => {
  const time = moment().format();
  console.log("time now =>", time);
}, 2000);

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
}, 1000);

setTimeout(function () {
  console.log("working!");
}, 5000);

/*
  // Module package Core




import { v4 as uuidv4 } from "uuid";
const random = uuidv4();
  console.log("random", random);
  
  
  
  
  import validator from "validator";
  
  const checkIP = validator.isIP("114.30.35.15g43");
  console.log("result:", checkIP);
  
  const checkInt = validator.isInt("sdfg");
  console.log("result:", checkInt);
  
  
  
  import inquirer from "inquirer";
  
  inquirer
  .prompt([{ type: "input", name: "number", message: "Type in the number!" }])
  .then((answer) => {
    console.log(`The value of the number I typed => ${answer.number}`);
  })
  .catch((err) => console.log(err));
  
  
  
  
  */

// Module package File
