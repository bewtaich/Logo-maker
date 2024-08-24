const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {//Logo Text
        name:'text',
        message:'Enter text for the logo (Max 3 characters)',
        validate: function (input){
        if (input.length <= 3){
            return true;
        } else {
            return 'Text must be a maximum of 3 characters'
        }
        }
    },
    //Logo Text Color
    {
        name:'textColor',
        message:'Enter a color or a hex code value for the text (ex. #00ff24)'
    },
    //Logo Shape
    {
        type:'list',
        name:'shape',
        message:'Choose a shape for the logo',
        choices: [
            'Square',
            'Circle',
            'Triangle'
        ],
    },
    //Logo Shape Color
    {
        name:'shapeColor',
        message:'Enter a color or a hex code value for the background (ex. #00ff24)'
    }
]

function init() {
    inquirer.prompt(questions)
    .then(response=>{
    
    })
}

init();