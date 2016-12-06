import React, {Component} from 'react'
import ResultList from '../containers/ResultList'

export default class InputField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      submitted: false
    }
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSearch (event) {
    this.setState({
      submitted: true
    })
    event.preventDefault()
 }

  render () {
    if (this.state.submitted) {
      return (
        <ResultList search={this.state.value} />
      )
    } else {
      return (
        <form onSubmit={this.handleSearch.bind(this)}>   
          <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)} placeholder='search..' />
          <input type='submit' value='Search' className='btn' />
        </form>
      )
    }
  }
}
