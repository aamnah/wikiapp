import React, {Component} from 'react'
import { searchWiki } from '../libs/ajax'

export default class ResultList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      results: []
    }
  }

  componentDidMount () {
    searchWiki(this.props.search)

    .then(response => {
      console.info('SUCCESS', response)
      const pages = response.data.query.pages
      let articles = []
      for (let i = 0; i < pages.length; i++) {
        articles.push(pages[i])
      }
      this.setState({
        results: articles
      })
    })

    .catch(error => {
      console.warn('ERROR', error)
    })
  }

  render () {
    const { results } = this.state

    return (
      <div className='resultList'>
        Here's a search listing for you. You searched for {this.props.search}.
        Your results are:
        {
          results.map(article => {
          let id = article.pageid
          return <li id={id}>{article.title}</li>
          })
        }
      </div> 
    )
  }
}
