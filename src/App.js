import React, {useState, useEffect , Fragment} from 'react'
// import 'boostrap/dist/css/boostrap.min.css'
import './App.css'
import { MovieLists } from './components/MovieLists'
import { MovieListHeading } from './components/MovieListHeading'
import { MovieSearchBox } from './components/MovieSearchBox'
import { AddFavourites } from './components/AddFavourites';
import { RemoveFavourites } from './components/RemoveFavourites';

export const App = () => {

  const [movies, setMovies] = useState([]);

  const [favMovies, setFavMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async(searchValue) => {

    const query = 's'
    const apiKey = 'd5fa7f35'
    const url = `http://www.omdbapi.com/?${query}=${searchValue}&apikey=${apiKey}`;

    const response = await fetch(url);
    const JSON = await response.json();

    // console.log(JSON);
    if(JSON.Search){
      setMovies(JSON.Search)
    } 
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const favMovieList = JSON.parse(localStorage.getItem('react-movie-app-favMovie'));

    setFavMovies(favMovieList);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favMovie', JSON.stringify(items));
  }

  const addFavMovie = (movie) => {
    const newFavMovieList = [...favMovies, movie];
    setFavMovies(newFavMovieList);

    saveToLocalStorage(newFavMovieList);
  }

  const removeFavMovie = (movie) => {
    const newFavMovieList = favMovies.filter((favMovie)=> favMovie.imdbID !== movie.imdbID);
    setFavMovies(newFavMovieList);

    saveToLocalStorage(newFavMovieList);
  }

  return (
    <Fragment >
      <div className='container-fluid movie-app'>

        {/* Row 1 */}
        <div className='row d-flex align-items-center mt-3 mb-3'>
            <MovieListHeading
              heading = "Movies"
             />
            <MovieSearchBox 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
             />
        </div>

        {/* Row 2 */}
        <div className='row'>
            <MovieLists
            movies = {movies}
            favouriteComponent={AddFavourites}
            handleFavMoviesClick={addFavMovie}
          />
        </div>

        {/* Row 3 */}
        <div className='row d-flex align-items-center mt-3 mb-3'>
        <MovieListHeading
          heading = "Your Favourites"
          />
        </div>

        {/* Row 4 */}
          <div className='row'>
            <MovieLists
            movies = {favMovies}
            favouriteComponent={RemoveFavourites}
            handleFavMoviesClick={removeFavMovie}
          />
        </div>
      </div>
     
    </Fragment>
  )
}

