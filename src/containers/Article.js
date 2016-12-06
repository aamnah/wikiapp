import React, {Component} from 'react'
import { getWiki } from '../libs/ajax'
import Article from '../components/Article'

export default class ArticleContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      id: null,
      title: '',
      extract: '',
      thumbnail: null,
      image: null
    }
  }

  componentDidMount () {
    getWiki(this.props.pageid)
    .then(response => {
      console.info('SUCCESS', response)
      const page = response.data.query.pages[0]

      this.setState({
        id: page['id'],
        title: page['title'],
        extract: page['extract'],
        thumbnail: page['thumbnail']['source'],
        image: page['thumbnail']['original']
      })
    })
    .catch(error => {
      console.warn('ERROR', error)
    })
  }

  render () {
    return (
      < Article data={this.state} />
    )
  }
}
