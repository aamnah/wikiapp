import React, {Component} from 'react'
import ResultList from './ResultList'

export default class InputField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      submitted: false
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSearch = (event) => {
    this.setState({
      submitted: true
    })
    event.preventDefault()
 }

  render () {
    const { submitted, value } = this.state
    if (submitted) {
      return (
        <ResultList search={value} />
      )
    } else {
      return (
        <form onSubmit={this.handleSearch}>   
          <input type='text' value={value} onChange={this.handleChange} placeholder='search..' />
          <input type='submit' value='Search' className='btn' />
        </form>
      )
    }
  }
}
