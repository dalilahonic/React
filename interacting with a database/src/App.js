import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

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

  const fetchMovies = useCallback(async function () {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch(
      //   'https://swapi.dev/api/films'
      // );

      const response = await fetch(
        'https://react-10d3f-default-rtdb.firebaseio.com/movies.json'
      );

      if (!response.ok) {
        throw new Error('something went wrong');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (let key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      if (data.length < 1) {
        throw new Error('no movies found ');
      }

      // const transformedMovies = data.results.map(
      //   (movie) => {
      //     return {
      //       id: movie.episode_id,
      //       title: movie.title,
      //       releaseDate: movie.release_date,
      //       openingText: movie.opening_crawl,
      //     };
      //   }
      // );

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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

  async function addMovieHandler(movie) {
    const response = await fetch(
      'https://react-10d3f-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
