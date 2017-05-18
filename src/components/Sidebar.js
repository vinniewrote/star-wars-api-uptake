import React from 'react';
import { Link } from 'react-router';
import Fav from './FavCharacter';
import Boo from './LeastFavCharacter';
import Crawl from './OpeningCrawl';

class Sidebar extends React.Component {
  render() {
    return (
        <div className='sidebar'>
          <Fav />
          <Boo />
        </div>
    )
  }
}

export default Sidebar;
