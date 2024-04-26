// individualMoviePage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const IndividualMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0c01575439dbfaa0927735f1a8eb5b45&append_to_response=videos,genre,similar,credits&sort_by=credits`);
        const data = await response.json();

        // Fetch additional details for each cast member
        const castWithImages = await Promise.all(
          data.credits.cast.map(async actor => {
            const actorDetailsResponse = await fetch(`https://api.themoviedb.org/3/person/${actor.id}?api_key=0c01575439dbfaa0927735f1a8eb5b45`);
            const actorDetails = await actorDetailsResponse.json();
            return { ...actor, profile_path: actorDetails.profile_path };
          })
        );

        // Update movie object with cast including profile images
        setMovie({ ...data, credits: { ...data.credits, cast: castWithImages } });
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { backdrop_path, poster_path, title, release_date, vote_average, overview, credits } = movie;

  return (
    <div className="backdrop">
      <img className='backdrop-img' src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt="Backdrop" />
      
      <div className="img-container">
      </div>
      
      <div className="individual-movie-page-wrapper">
        <img className='poster' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      
        <div className="movie-detail-wrapper">
          <h2>{title}</h2><p>({release_date})</p>
          <p>Vote: {vote_average}</p>
          <p>Release Date: {release_date}</p>
          <p>Rating: {parseFloat(movie.vote_average).toFixed(1).slice(0, 3)}%</p>
          <h2 className="overview">Overview <br></br></h2> 
          <p className='overview-para'>{overview}</p>
          <h2>Credits</h2>
          <p>Cast:</p>
          <div className="container"> 
            <ul className="cast">
              {credits.cast.map(actor => (
                actor.profile_path && ( // Check if profile_path exists
                  <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt={`${actor.name}'s profile`}/>
                    <p>{actor.name}</p>
                  </li>
                )
              ))}
            </ul>
          </div>


        </div>
      </div>
    </div>
  );
};

export default IndividualMoviePage;