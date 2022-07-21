class Circle{
    constructor(radius,color){
        this.radius = radius || 1.00;
        this.color = color || "red";
    }
    getRadius(){
        return`The Radius is :${this.radius}`;
    }
    setRadius(num){
        if(this.radius !== num){
            return `Setted Radius is ${num}`;
        }else{
            return `${this.getRadius}`
        }
        
    }
    getColor(){
        return`The Color is : ${this.color}`;
    }
    setColor(col){
          if(this.color !== col){
        return`You Setted This Color ${col}`;
    }
    else {
        return`${this.getColor}`;
    }

}
 getArea(){
     this.area = 3.14*(this.radius*this.radius);
     return `Area is ${this.area}`;
     }
 
 getCircumference(){
     
    this.circum = 2*3.14*this.radius;
    return `Circumfrence is ${this.circum}`;
}
toString(){
    return ` Circle [${[  this.radius = this.radius , this.color= this.color]}]`;
}
 
}
const circleA = new Circle();
const circleB = new Circle(2);
const circleC  = new Circle(3,"blue");


console.log(circleA.getRadius());
console.log(circleB.getRadius());
console.log(circleC.getRadius());


console.log(circleA.setRadius(4));
console.log(circleB.setRadius(6));
console.log(circleC.setRadius(5));


console.log(circleA.getColor());
console.log(circleB.getColor());
console.log(circleC.getColor());




console.log(circleA.setColor("orange"));
console.log(circleB.setColor("white"));
console.log(circleC.setColor("green"));






console.log(circleA.getArea());
console.log(circleB.getArea());
console.log(circleC.getArea());




console.log(circleA.getCircumference());
console.log(circleB.getCircumference());
console.log(circleC.getCircumference());




console.log(circleA.toString());
console.log(circleB.toString());
console.log(circleC.toString());