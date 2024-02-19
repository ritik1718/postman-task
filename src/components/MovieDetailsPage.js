import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDetailsPage.css'; 

const MovieDetailsPage = ({ movie }) => {
    const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/genres?api_key=0c54ebdd3b1188fed8ba37b508fe49b1`);
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, [movie.id]);
  return (
    <div className="movie-details-page" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;