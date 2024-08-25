const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes.js");

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
    message: "Enter a color or a hex code value for the text (ex. #00ff24)",
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
      "Enter a color or a hex code value for the background (ex. #00ff24)",
  },
];

function generateSVG(shape, response) {
    const svgData=`<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
    </svg>
    `;
    return svgData
}

function init() {
  inquirer.prompt(questions).then((response) => {
    let shape
    const {text, textColor, shapeColor} = response;

    switch (response.shape){
        case 'Circle':
            shape = new Circle(shapeColor, text, textColor);
            break;
        case 'Square':
            shape = new Square(shapeColor, text, textColor);
            break;
        case 'Triangle':
            shape = new Triangle(shapeColor, text, textColor);
            break;
    }

    fs.writeFile("./examples/logo.svg", generateSVG(shape, response), (err) => {
      if (err) {
        console.error("Error generating logo.svg", err);
      } else {
        console.log("Successfully generated logo.svg");
      }
    });
  });
}

init();
