import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {

  const [movies, setMovies] = useState([
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg",
      title: "Jumanji",
      synopsis: "When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.",
      genre: "Adventure",
      director: "Joe Johnston"
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/ac/Mean_Girls_film_poster.png",
      title: "Mean Girls",
      synopsis: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
      genre: "Comedy",
      director: "Mark Waters"
    },
    {
      id: 3,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.nxxDA1DWkvKDp-vSUGHVdgAAAA&pid=Api",
      title: "La La Land",
      synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      genre: "Musical",
      director: "Damien Chazelle"
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg",
      title: "Die Hard",
      synopsis: "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      genre: "Action",
      director: "John McTiernan"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};