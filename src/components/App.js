import React, {Component} from 'react'
import ResultList from '../containers/ResultList'
import RandomArticle from './RandomArticle'
import Search from '../containers/Search'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Wikipedia Viewer</h1>
        <div className='searchBar'>
          <RandomArticle />
          <Search />
        </div>
      </div>
    )
  }
}
