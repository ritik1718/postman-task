import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetailsPage from './components/MovieDetailsPage'; // Import the new component here
import SearchBar from './components/SearchBar';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className='header'>
        <h1 className='title'>Pirated Movies Site</h1>
      </header>
      {selectedMovie ? (
        <MovieDetailsPage movie={selectedMovie} />
      ) : (
        <MovieList onMovieClick={handleMovieClick} />
      )}
    </div>
  );
  



function App() {
  const handleSearch = (query) => {
    
    console.log('Searching for:', query);

  };

  return (
    <div className="App">
      <h1>Movie Streaming Service</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Other components and content */}
    </div>
  );
}



}

export default App;