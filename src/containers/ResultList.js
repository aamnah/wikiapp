import React, {Component} from 'react'
import { searchWiki } from '../libs/ajax'
import ResultItem from '../components/ResultItem'

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
      // console.info('SUCCESS', response)
      this.setState({
        results: response.data.query.pages
      })
    })

    .catch(error => {
      console.warn('ERROR', error)
    })
  }

  render () {
    return (
      <ResultItem search={this.props.search} results={this.state.results} />
    )
  }
}
