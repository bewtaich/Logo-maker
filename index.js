const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes.js");
const SVG = require("./lib/svg.js");


//Prompts
const questions = [
  {
    //Logo Text
    name: "text",
    message: "Enter text for the logo (Max 3 characters)",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      } else {
        return "Text must be a maximum of 3 characters";
      }
    },
  },
  //Logo Text Color
  {
    name: "textColor",
    message: "Enter a color or a hex color code for the text (ex. #00ff24)",
  },
  //Logo Shape
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for the logo",
    choices: ["Square", "Circle", "Triangle"],
  },
  //Logo Shape Color
  {
    name: "shapeColor",
    message:
      "Enter a color or a hex color code for the background (ex. #00ff24)",
  },
];


function init() {
  inquirer.prompt(questions).then((response) => {

    const {text, textColor, shape, shapeColor} = response;

    const svg = new SVG();
    svg.setText(text, textColor)

    let shapeChoice
    switch (shape){
        case 'Circle':
            shapeChoice = new Circle();
            break;
        case 'Square':
            shapeChoice = new Square();
            break;
        case 'Triangle':
            shapeChoice = new Triangle();
            break;
    }

    shapeChoice.setColor(shapeColor);

    svg.setShape(shapeChoice);

    const svgData = svg.render();

    fs.writeFile("./examples/logo.svg", svgData, (err) => {
      if (err) {
        console.error("Error Generating logo.svg", err);
      } else {
        console.log("Successfully Generated logo.svg");
      }
    });
  });
}

init();
