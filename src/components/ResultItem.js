import React, {Component} from 'react'
import { getWiki } from '../libs/ajax'
import Article from '../containers/Article'

export default class ResultItem extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      clicked: false,
      pageid: null
    }
  }

  handleClick(pageid, event) {
    this.setState({
      clicked: true,
      pageid
    })
    event.preventDefault()
  }

  render () {
    const { search, results } = this.props
    
    if (this.state.clicked) {
      return <Article pageid={this.state.pageid} />
    } else {
      return (
        <div className='resultList'>
          You searched for <strong>{this.props.search}</strong>. The results are &#8230;
          {
            results.map(article => {
              let { title, extract, pageid } = article
              return (
                <div key={pageid} className='resultItem' onClick={this.handleClick.bind(this, pageid)}>
                  <h3>{title}</h3>
                  <p>{extract}</p>
                </div>
              )
            })
          }
        </div> 
      )
    }
  }
}

