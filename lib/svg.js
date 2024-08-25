
class SVG {
    constructor() {
        this.textElement = ""
        this.shape = null;
    }

setShape(shape){
    this.shape = shape;
}

setText(text, textColor){
    if (text.length > 3){
        throw new Error("Text must not exceed 3 characters.")
    }
    this.textElement =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
}

render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape ? this.shape.render() : ""}${this.textElement}</svg>`
}

}

module.exports = SVG;
