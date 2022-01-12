const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the manager for this team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log("Please enter a name for the manager.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manger's id.",
            validate: idInput => {
                if (idInput) {
                    return true;
                }else {
                    console.log("Please enter in the manager's id.")
                }
            }

        },
        {
          type: 'input',
          name: 'email',
          message: "Please enter the manager's email!",
          validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if(valid) {
                  return true;
              }else {
                  console.log("Please enter email!")
                  return false;
              }
          }  
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number!",
            validate: (officeNumber) =>{
                if (officeNumber) {
                    return true;
                }else {
                    console.log("Please enter an office number.")
                }
            }
        },
    ])
}