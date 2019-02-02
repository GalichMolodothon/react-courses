import React from 'react'

import { Photos } from '../modules/photos/list'
import { getPhotos } from '../api'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        photos: [],
        limit: 6,
        page:1
    } 
    
  }

  componentDidMount() {
      getPhotos({
          limit: this.state.limit,
          page: this.state.page,
      })
          .then(photos => {
              this.setState({
                  photos: photos
              })
          })
  }
  
  render() {    
    return <div>
        <Photos photos={this.state.photos}/>
    </div>
  }
}