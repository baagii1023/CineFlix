import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartCirclePlus, FaHeartCircleMinus } from 'react-icons/fa6';

const MovieCard = ({ movie, handleMoreInfoClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
    const isMovieFavorited = storedMovies.some((favMovie) => favMovie.id === movie.id);
    setIsFavorited(isMovieFavorited);
  }, [movie.id]);
  
  const handleClick = () => {
    if (typeof handleMoreInfoClick === 'function') {
      handleMoreInfoClick(movie.id);
    }
  };

  const handleFavClick = () => {
    const storedMovies = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
    const updatedFavourites = isFavorited
      ? storedMovies.filter((favMovie) => favMovie.id !== movie.id)
      : [...storedMovies, movie];
      
    console.log('Is favorited:', !isFavorited);
    
    localStorage.setItem('favouriteMovies', JSON.stringify(updatedFavourites));
    setIsFavorited(!isFavorited); // Update state to toggle favorited status
  };
  
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {parseFloat(movie.vote_average).toFixed(1).slice(0, 3)}%</p>
        <p className="favbutton" onClick={handleFavClick}>
          {isFavorited ? <FaHeartCircleMinus color="#9eff10" /> : <FaHeartCirclePlus />}
        </p>
        <p className="overview">{movie.overview}</p>
        <Link to={`/movie/${movie.id}`}>
          <button onClick={handleClick}>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
