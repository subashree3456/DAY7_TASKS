class uber{
    constructor(distance, rate , waitingprice, place){
        this.distance = distance;
        this.rate = rate;
        this.waitingperiod=waitingprice;
        this.place=place;
        
    }
    setDistance(dist)
    {
        this.distance=dist;
    }

    getRidedetails()
    {
        return (` the distance of ride is ${this.distance} and rate of ${this.rate} with
        waitingperiod of ${this.waitingperiod} of that ${this.place}`);
    }

    getPrice()
    {
        var price;
        price = (this.rate * this.distance ) + (this.waitingperiod * 5);
        return (` price is ${price}`);

    }

}

let person1 = new uber ("350","20","15","chennai");
let person2=new uber ("230","10","12","trichy");

console.log(person1.getRidedetails());
console.log(person1.getPrice());
person1.setDistance(150);
console.log(person1.getRidedetails());
console.log(person1.getPrice());
console.log(person2.getRidedetails());
console.log(person2.getPrice());





