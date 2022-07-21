class person{
constructor(name,gender,city,height,weight,phonenumber){
    this.name=name;
    this.gender=gender;
    this.city=city;
    this.height=height;
    this.weight=weight;
    this.phonenumber=phonenumber;
    
    
}

getPersonDetails(){

    return (` the person name is ${this.name} with gender as ${this.gender}
    , height is ${this.height} and weight is ${this.weight} and phone number is ${this.phonenumber}`)

}

getBMI()
{
   var bmi;
   bmi =  (this.weight)/(this.height *this.height);
   return (`BMI is ${bmi}`)

}
}

let person1=new person ("subi","female","trichy", 1.6 ,50 ,9842469794);
console.log(person1.getPersonDetails());
console.log(person1.getBMI());

let person2=new person ("sara","female","chennai", 1.5 ,55 ,9842446794);
console.log(person2.getPersonDetails());
console.log(person2.getBMI());