class Shape {
    constructor(color){
        this.color=color;
    }
    setColor() {
        this.color=color
    }
}
class Square extends Shape {
    render(){

    }
}

class Circle extends Shape{
    render(){

    }
}

class Triangle extends Shape{
    render(){

    }
}

module.exports = {Square, Circle, Triangle}