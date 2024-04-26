import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const PageFavourite = () => {
  // State to store favorited movies
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(()=>{
		document.title = 'Favourite page'
	})

  useEffect(() => {
    // Retrieve favorited movies from local storage on component mount
    const storedMovies = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
    console.log("Favorited movies from local storage:", storedMovies);
    setFavouriteMovies(storedMovies);
  }, []);

  const removeFavoriteMovie = (movieId) => {
    // Filter out the movie with the given id
    const updatedFavourites = favouriteMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem('favouriteMovies', JSON.stringify(updatedFavourites)); // Update local storage
    // Update state to remove the unfavorited movie immediately
    setFavouriteMovies(updatedFavourites);
  };

  return (
    <div className='favourite'>
      {favouriteMovies.length === 0 ? (
        <div className='sorry'>
          Sorry you have no favorited movies. Return to the <a href="PageHome" className="">home page</a> to add a favorite movie.
        </div>
      ) : (
        <div className="pictures">
          {favouriteMovies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              handleFavoriteClick={() => removeFavoriteMovie(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PageFavourite;
