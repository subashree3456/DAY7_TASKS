class Movie
{
    constructor (title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
       // this.rating=rating;
        if(rating==null)
        {
            return this.rating="PG";
        }
        else
        {
            return this.rating=rating;  
        }
    }


getPG(array)
{
   var result= array.filter((element)=> element.rating=="PG")
   return result;
}

getMovieDetails()
{
    return (`the movie name is ${this.title} with production name as ${this.studio}
    and rating as ${this.rating}`);
} 
}

let film1 = new Movie ("Casino Royale","Eon Productions","PG­13");

let film2 = new Movie ("RRR","Big Giant");

let film4 = new Movie ("RRR","small Giant");

let film3 = new Movie ("Vikram","Pink studios","PG12");

const array = [film1 , film2 , film4 , film3];

console.log(film2.getPG(array));

console.log(film3.getMovieDetails());
console.log(film1.getMovieDetails());

