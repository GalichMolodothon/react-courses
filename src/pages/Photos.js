import React from 'react'

import { Photos } from '../modules/photos/list'
import { getData } from '../api'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        photos: [],
        preFetch: [],
        pagination: {
            limit: 6,
            page: 1
        },
        load: 3,
        total: 0,
        albums:[],
        albumId:''
      };

      this.handleLoadMore = this.handleLoadMore.bind(this)
      this.handleAlbums = this.handleAlbums.bind(this)
  }

  componentDidMount() {
      getData('/photos', {
          params: {
              _limit: this.state.pagination.limit + this.state.load,
              _page: this.state.pagination.page
          }
      })
      .then(data => {
          this.setState({
              photos: data.json.slice(0, this.state.pagination.limit),
              preFetch: data.json.slice(this.state.pagination.limit),
              total: data.headers.total
          })
      });

      getData('/albums')
      .then(data => {
          this.setState({
              albums: data.json
          })
      });
  }

  handleLoadMore(e) {
    e.preventDefault();

    let page = this.state.pagination.page + 1;
    let start = (page * this.state.load) + this.state.load;

    getData('/photos', {
        params: {
            _start: start,
            _end: start + this.state.load
        }
    }).then(data => {
        this.setState({
            photos: [...this.state.photos, ...this.state.preFetch],
            preFetch: data.json,
            pagination: {...this.state.pagination, page: page}
        })
    })
  }

  handleAlbums(e) {
    let albumId = e.target.value;

    getData('/photos', {
        params: {
            _limit: this.state.pagination.limit,
            _page: 1,
            albumId: albumId,
            q: this.state.q
        }
    })
    .then(data => {
        this.setState({
            photos: data.json,
            total: data.headers.total,
            pagination: {...this.state.pagination, ...{ page: 1 }},
            albumId: albumId
        })
    })
  }
  
  render() {    
    return <div>
        <Photos photos={this.state.photos}
                handleLoadMore={this.handleLoadMore}
                handleAlbums={this.handleAlbums}
                albums={this.state.albums}
        />
    </div>
  }
}