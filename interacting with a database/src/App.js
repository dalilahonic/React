import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchMovies() {
  //   fetch('https://swapi.dev/api/films')
  //     .then((response) =>
  //       response.json().then((data) => {
  //         setMovies(data.results);

  //       })
  //     )
  // }

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://swapi.dev/api/films'
      );

      if (!response.ok) {
        throw new Error('something went wrong');
      }

      const data = await response.json();

      if (data.length < 1) {
        throw new Error('no movies found ');
      }

      const transformedMovies = data.results.map(
        (movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
          };
        }
      );

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let moviesContent = '';

  if (!isLoading && movies.length > 0) {
    moviesContent = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    moviesContent = <p>Data is loading, please wait.</p>;
  }

  if (!isLoading && error) {
    moviesContent = <p>{error}</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {moviesContent}
        {/* {!isLoading && movies.length > 0 && (
          <MoviesList movies={movies} />
        )}
        {isLoading && <p>Data is loading, please wait.</p>}

        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </>
  );
}

export default App;
