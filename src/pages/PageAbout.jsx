// Page - About
import { useEffect } from "react";

const PageAbout = () => {
	useEffect(()=>{
		document.title = 'About page'
	})
	return (
		<main className="about">
			<h2>About Page</h2>
			<p>"This product uses the TMDB API but is not endorsed or certified by TMDB."</p>
			<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" width="150px" height="50px"></img>
			<p className="about-para">The React Movie Database Application is a web-based platform designed to provide users with a streamlined and user-friendly interface for accessing information about movies. Utilizing the React framework, the application offers features such as browsing through a vast collection of movies, searching for specific titles, viewing detailed information about each movie (including synopsis, cast, ratings, and reviews), and even the ability to create personalized watchlists or favorite lists. With its responsive design and intuitive navigation, the React Movie Database Application aims to enhance the user experience for movie enthusiasts, making it easier than ever to explore and discover new films.</p>
		</main>
	);
};

export default PageAbout;