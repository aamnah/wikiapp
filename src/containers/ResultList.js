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
        You searched for {this.props.search}. The results are:
        {
          results.map(article => {
            return (
              <div id={article.pageid} className='resultItem'>
                <h3>{article.title}</h3>
                <p>{article.extract}</p>
              </div>
            )
          })
        }
      </div> 
    )
  }
}
