import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
          api_key: '0c54ebdd3b1188fed8ba37b508fe49b1',
          page: page
        }
      });
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1); 
  };

  const handleMovieClick = (movie) => {
    onMovieClick(movie);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-2 mb-4">
            <div className="card movie-card" onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Release Year: {movie.release_date}</p>
                <div className="overview">{movie.overview}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination mt-4">
        <button className="btn btn-primary mr-2" onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <button className="btn btn-primary next-button" onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default MovieList;