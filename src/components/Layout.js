import React from 'react';
import MovieCard from './MovieCard'
import Sidebar from './Sidebar'
import OpeningCrawl from './OpeningCrawl'
import superagent from 'superagent'
import _ from 'lodash'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {film: []};
  }

  componentDidMount() {
    const filmsUrl = 'http://swapi.co/api/films/';
    const characterUrl ="http://swapi.co/api/people/";
    superagent.get(filmsUrl).then((response) => {
      console.log(response.body.results);
      this.setState({
        films: response.body.results
      });
    });
    superagent.get(characterUrl).then((data) => {
      console.log(data.body.results);
      this.setState({
        people: data.body.results
      });
    });
  }

  render(){
    const films = _.map(this.state.films, (film) => {
      return <div className='cardBlock'><p>{film.title}</p><p>{film.director}</p><p>{film.characters[0]}</p><p>{film.characters[1]}</p><p>{film.characters[2]}</p></div>
    });
    const crawls = _.map(this.state.films, (crawl, i) => {
    return <tr className="filmCrawl" key={i}><th scope="row">{crawl.title}</th><td data-film={crawl.episode_id} className=" bar"><p>{crawl.opening_crawl.length}</p></td></tr>
    });
    return(
      <div className='swContainer'>
        <main className='filmGroup'>{films}</main>

        <aside>
          <Sidebar />
          <div className='crawlChart sidebarMod'><h3>How long are these Opening Crawls?</h3> <table id="sw-graph"><tbody>{crawls}</tbody></table></div>
        </aside>
      </div>
    );
  }
}


export default Layout;
