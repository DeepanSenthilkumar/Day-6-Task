class Movie {
    constructor(title, studio, rating = "PG") {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
   
    static getPG(movies) {
       return movies.filter(movie => movie.rating === "PG");
    }
   }
   
   // create an instance of the class Movie
   const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
   
   console.log(Movie.getPG([casinoRoyale]));