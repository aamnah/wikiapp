import React, {Component} from 'react'
import ResultList from '../containers/ResultList'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Wikipedia Viewer</h1>
        <ResultList search='lahore' />
      </div>
    )
  }
}
