const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer")
const fs=require("fs")
const path=require("path")
const generateHTML = require("./util/generateHtml")
const team = []


function start (){
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"Manager's name"

        },
        {
            type:"input",
            name:"managerID",
            message:"Manager's ID"

        },
        {
            type:"input",
            name:"managerEmail",
            message:"Manager's Email"

        },
        {
            type:"input",
            name:"managerOfficeNum",
            message:"Manager's Office Number"

        },
    ]).then(answers=>{
        const manager = new Manager (answers.managerName,answers.managerID,answers.managerEmail,answers.managerOfficeNum)
        team.push(manager)
        generateTeam()

    })
    
}

function generateTeam (){    
    inquirer.prompt([
        {
            type:"list",
            name:"teamMember",
            message:"Please choose from lsit below",
            choices: ["Engineer", "Intern", "Quit"]

        },
    ]).then(answers=>{
        switch(answers.teamMember) {
            case "Engineer":
                createEngineer()

              break;
            case "Intern":
                createIntern()

              break;
            default:
                fs.writeFileSync("index.html",generateHTML(team),"utf-8")
              // code block
          }

    })
}
function createEngineer(){
    
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message:"Engineer's name"

        },
        {
            type:"input",
            name:"engineerID",
            message:"Engineer's ID"

        },
        {
            type:"input",
            name:"engineerEmail",
            message:"Engineer's Email"

        },
        {
            type:"input",
            name:"engineerGitHub",
            message:"Engineer's GitHub"

        },
    ]).then(answers=>{
        const engineer = new Engineer (answers.engineerName,answers.engineerID,answers.engineerEmail,answers.engineerGitHub)
        team.push(engineer)
        generateTeam()

    })
}

function createIntern(){
    
    inquirer.prompt([
        {
            type:"input",
            name:"InternName",
            message:"Intern's name"

        },
        {
            type:"input",
            name:"InternID",
            message:"Intern's ID"

        },
        {
            type:"input",
            name:"InternEmail",
            message:"Intern's Email"

        },
        {
            type:"input",
            name:"internSchool",
            message:"Intern's School"

        },
    ]).then(answers=>{
        const intern = new Intern (answers.InternName,answers.InternID,answers.InternEmail,answers.internSchool)
        team.push(intern)
        generateTeam()

    })
}
start()
