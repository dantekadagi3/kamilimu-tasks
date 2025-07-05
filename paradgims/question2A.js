
// 2A. Rewrite this using Object-Oriented Programming (OOP)
// Create an object representing a circle.
// Include a method getCircumference() that returns the result.


class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(14);
console.log("Circumference:", circle.getCircumference());
