import React, { Fragment } from 'react'

export const MovieLists = (props) => {

  const FavouriteComponent = props.favouriteComponent
  return (
    <Fragment>
      {props.movies.map((movie, index) =>
        <div key={index} className='image-container d-flex justify-content-start m-3'>
          <img
            
            src={movie.Poster} 
            alt={movie.Title} />
        <div 
          className='overlay d-flex align-items-center justify-content-center'
          onClick={() => props.handleFavMoviesClick(movie)}
        >     
          <FavouriteComponent />
        </div>
        </div>
      )}
    </Fragment>
  )
}
