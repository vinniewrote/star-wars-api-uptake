import React from 'react';
import { Link } from 'react-router';


const MovieCard = React.createClass({
  render() {
    return (
        <div className='card'>
          <div className='poster'></div>
          <div className='movieTitle'></div>
          <div className='movieDirector'></div>
          <div className='movieCharacters'></div>
        </div>
    )
  }
});

export default MovieCard;
