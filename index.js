#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:anmolchhabra71500@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    // Initialize the loader
                    const loader = ora({
                        text: 'Opening Google Drive link to resume',
                        spinner: cliSpinners.material,
                    }).start();
            
                    const googleDriveLink = "https://drive.google.com/file/d/1jSMPlfHpC52Q8Rx2u4WKo2nZ9Dzl1vCr/view?usp=drive_link";
            
                    // Open the Google Drive link directly in the browser
                    open(googleDriveLink)
                      .then(() => {
                            loader.stop();
                            console.log(`\nResume opened successfully in your browser at ${chalk.blue(googleDriveLink)}\n`);
                        })
                        .catch((error) => {
                            loader.stop();
                            console.error("Error opening Google Drive link:", error);
                        });
                }
            },
            // {
            //     name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
            //     value: () => {
            //         open('https://calendly.com/anmolchhabra21/30min');
            //         console.log("\n See you at the meeting \n");
            //     }
            // },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Boom! See you on the other side\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("Anmol Chhabra"),
    twitter: chalk.gray("https://x.com/") + chalk.cyan("AnmolCh37766217"),
    github: chalk.gray("https://github.com/") + chalk.green("anmolchhabra21"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("anmolchhabra21"),
    web: chalk.cyan("https://313730355755352064.hello.cv"),
    npx: chalk.red("npx") + " " + chalk.white("anmolchh-card"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());