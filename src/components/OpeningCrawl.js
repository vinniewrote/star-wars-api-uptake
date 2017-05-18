import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent'
import _ from 'lodash'
import Layout from './Layout'

class OpeningCrawl extends React.Component {
  render() {
    const { crawl } = this.props;
    return (
        <div className='crawlChart sidebarMod'>
          <h3>How long are these Opening Crawls?</h3>
          <div className='crawlBlock'><p>{crawl.title} &mdash; {crawl.opening_crawl.length}</p></div>
        </div>
    )
  }
}

export default OpeningCrawl;
