
class SVG {
    constructor() {
        this.textData="";
        this.shapeData="";
    }

setShape(shape){
    this.shapeData = shape.render();
}

setText(text, textColor){
    if (text.length > 3){
        throw new Error("Text must not exceed 3 characters.")
    }

    this.textData = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
}

render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shapeData}
    ${this.textData}
    </svg>`
}

}

module.exports = {SVG};
