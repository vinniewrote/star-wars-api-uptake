import React from 'react';
import Layout from './Layout'

class MovieCard extends React.Component {
  render() {
const {entry, i, film} = this.props;

    return (
        <div className='card'>
          <div className='poster'></div>
          <div className='movieTitle'>{film}</div>
          <div className='movieDirector'></div>
          <div className='movieCharacters'></div>
        </div>
    )
  }
}

export default MovieCard;
