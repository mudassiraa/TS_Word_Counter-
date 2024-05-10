#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// display a wellcome message
console.log("=".repeat(60));
console.log(chalk.bold.italic.blue("\n\t\t Wellcome To Word Counter With Me\n"));
console.log("=".repeat(60));
// give input from user
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence.",
    }
]);
let words = answers.sentence.trim().split(" ");
// user input 
console.log("=".repeat(60));
console.log(chalk.bold.italic("- Sentence Word:"));
console.log(words);
console.log(chalk.bold.italic(`\n - Word Count: ${chalk.bold.blue(words.length)}`));
console.log("=".repeat(60));
