import React, { useState, useEffect } from 'react';
import { appTitle } from "../globals/globals";
import MovieCard from "../components/MovieCard"; 

const PageHome = () => {
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('now_playing');
    const [loading, setLoading] = useState(true);
    const API_KEY = import.meta.env.VITE_API_KEY

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `${API_KEY}`
        }
    };

    useEffect(() => {
        fetchMovies(selectedCategory);
        document.title = `Home | ${appTitle}`;
    }, [selectedCategory]);

    const fetchMovies = async (category) => {
        setLoading(true);

        try {
            let url;
            // Define different URLs based on the selected category
            switch (category) {
                case 'top_rated':
                    url = 'https://api.themoviedb.org/3/movie/top_rated';
                    break;
                case 'now_playing':
                    url = 'https://api.themoviedb.org/3/movie/now_playing';
                    break;
                case 'upcoming':
                    url = 'https://api.themoviedb.org/3/movie/upcoming';
                    break;
                default:
                    // Use the default URL for 'popular' category
                    url = 'https://api.themoviedb.org/3/movie/popular';
            }

            const response = await fetch(url, options);
            const data = await response.json();
            const fetchedMovies = data.results || [];
            setMovies(fetchedMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="site-wrapper">
            <div className="select-wrapper">
                <div className="category-buttons">
                    <button className={selectedCategory === 'popular' ? 'selected' : ''} onClick={() => setSelectedCategory('popular')}>Popular</button>
                    <button className={selectedCategory === 'top_rated' ? 'selected' : ''} onClick={() => setSelectedCategory('top_rated')}>Top Rated</button>
                    <button className={selectedCategory === 'now_playing' ? 'selected' : ''} onClick={() => setSelectedCategory('now_playing')}>Now Playing</button>
                    <button className={selectedCategory === 'upcoming' ? 'selected' : ''} onClick={() => setSelectedCategory('upcoming')}>Upcoming</button>
                </div>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="pictures">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default PageHome;