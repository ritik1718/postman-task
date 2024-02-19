import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = ({ movie }) => {
  const history = useHistory();

  const handleReturnButtonClick = () => {
    history.goBack();
  };

  return (
    <div className="movie-details-page" style={{ backgroundImage: url('https://image.tmdb.org/t/p/original${movie.backdrop_path}') }}>
      <button className="return-button" onClick={handleReturnButtonClick}>Return to Main Page</button>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;