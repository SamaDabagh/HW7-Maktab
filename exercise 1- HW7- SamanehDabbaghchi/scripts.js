/*

Ex.1
Your task is to create a Circle constructor that creates a circle with a radius provided by an
argument. The circles constructed must have two methods getArea() (PI*r^2) and
getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).*/

const Circle = function (reduce) {
  const PI = 3.14;
  const getArea = (reduce) => {
    return (this.reduce / 2) * PI;
  };
  return getArea;
};

let circy = new Circle(5);
circy.getArea();
circy.getPerimeter();
console.log(c(5));
// const BusinessUser = function (businessName, hoursFree, acceptedPurpose) {};
