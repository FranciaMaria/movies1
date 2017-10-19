import { Injectable } from '@angular/core';

@Injectable()
export class Movie {
	 
  constructor() { 
  	
  }
  private movies = [
    {
      id: 1,
      name: "It",  
      director: "Andy Muschietti",
      imageUrl: "http://www.imdb.com/title/tt1396484/mediaviewer/rm1002251008",
      duration: 135,
      releaseDate: "8 September 2017",
      genres: ["horror", "thriller", "drama"]
    },
    {
      id: 2,
      name: "Bates Motel",  
      director: "Anthony Cipriano",
      imageUrl: "http://www.imdb.com/title/tt2188671/mediaviewer/rm1469005312",
      duration: 45,
      releaseDate: "18 March 2013",
      genres: ["horror", "thriller", "drama", "mystery"] 
    },
    {
      id: 3,
      name: "Black Swan",  
      director: "Darren Aronofsky",
      imageUrl: "http://www.imdb.com/title/tt0947798/mediaviewer/rm1503101184",
      duration: 108,
      releaseDate: "17 December 2010",
      genres: ["thriller", "drama"]
    }
   
  ];
}

