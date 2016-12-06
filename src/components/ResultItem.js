import React, {Component} from 'react'

export default class App extends Component {

  handleClick (event) {
    alert('You clicked')
    event.preventDefault()
  }

  render () {
    const { search, results } = this.props

    return (
      <div className='resultList' onClick={this.handleClick.bind(this)}>
        You searched for <strong>{this.props.search}</strong>. The results are &#8230;
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
