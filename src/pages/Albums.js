import React from 'react'

import { Albums } from '../modules/albums/list'
import { getAlbums, getAlbumPhoto } from "../api";


export default class extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
          albums: [],
          limit: 6,
          page:1,
          albumPhotos:[]
      };

      this.onClickGetPhoto = this.onClickGetPhoto.bind(this);

  }

  componentDidMount() {
      getAlbums({
          limit: this.state.limit,
          page: this.state.page,
      })
      .then(albums => {

          this.setState({

              albums: albums
          })
      })
  }

  onClickGetPhoto(AlbumId) {
      let id = AlbumId;
      getAlbumPhoto({
          albumId: id,
          // limit: 2,
          // page: 1
      })
      .then(photos => {
          this.setState({
              albumPhotos: photos
          })
      });
  }
  
  render() {    
    return <div>
        <Albums albums={this.state.albums} albumPhotos={this.state.albumPhotos} onClickGetPhoto={this.onClickGetPhoto}/>
    </div>
  }
}