// Base class Shape
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

// Demonstrating polymorphism
function drawShape(shape) {
    shape.draw();
}

const myCircle = new Circle();
const myRectangle = new Rectangle();

drawShape(myCircle);    // Output: Drawing a circle
drawShape(myRectangle); // Output: Drawing a rectangle
