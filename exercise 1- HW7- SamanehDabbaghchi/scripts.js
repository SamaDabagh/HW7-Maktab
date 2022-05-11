/*

Ex.1
Your task is to create a Circle constructor that creates a circle with a radius provided by an
argument. The circles constructed must have two methods getArea() (PI*r^2) and
getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).*/

function Circle(radius) {
  this.radius = radius;
  this.getArea = (radius) => Math.PI * Math.pow(this.radius, 2);
  this.getPerimeter = (radius) => 2 * Math.PI * this.radius;
}

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
