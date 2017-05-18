import React from 'react';
import MovieCard from './MovieCard'
import superagent from 'superagent'
import _ from 'lodash'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {film: []};
  }

  componentDidMount() {
    console.log('about to call api');
    const filmsUrl = 'http://swapi.co/api/films/';
    const characterUrl ="http://swapi.co/api/people/";
    superagent.get(filmsUrl).then((response) => {
      console.log(response.body.results);
      this.setState({
        films: response.body.results
      });
    });

    superagent.get(characterUrl).then((response) => {
      console.log(response);
    });
  }

  render(){
    const films = _.map(this.state.films, (film) => {
      return <div className='cardBlock'><p>{film.title}</p><p>{film.director}</p><p>{film.characters[0]}</p><p>{film.characters[1]}</p><p>{film.characters[2]}</p></div>

    });
    return(
      <div className='swContainer'>
        <div>{films}</div>
      </div>
    );
  }


}


export default Layout;
