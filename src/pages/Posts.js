import React from 'react'

import { getData } from '../api'
import { Posts } from '../modules/post/list'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [],
      order: 'asc',
      sort: 'id',
      search: '',
      view:'grid',
      pagination: {
        limit: 6,
        page: 1
      },
      total: 0
    }
    
    this.onClickPagination = this.onClickPagination.bind(this);
    this.onClickLimit = this.onClickLimit.bind(this);
    this.onClickOrder = this.onClickOrder.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleView = this.handleView.bind(this);
    // this.onClickPaginationPrev = this.onClickPaginationPrev.bind(this);
    // this.onClickPaginationNext = this.onClickPaginationNext.bind(this);
  }
  
  componentDidMount() {
      getData('/posts', {
        params: {
            _limit: this.state.pagination.limit,
            _page: this.state.pagination.page,
            _search: this.state.search,
            _order: this.state.order
        }
    })
    .then(data => {
        this.setState({
            posts: data.json,
            total: data.headers.total
        })
    })
  }
  
  onClickLimit(event) {
      
    let value = event.target.value;

    getData('/posts', {
        params: {
            _limit: value,
            _page: this.state.pagination.page,
            _search: this.state.search,
            _sort: this.state.sort,
            _order: this.state.order
        }
    })
    .then(data => {
        this.setState({
            order: this.state.order,
            search: this.state.search,
            posts: data.json,
            pagination: {...this.state.pagination, ...{ limit: value }}
        })
    })
  }

  onClickPagination(current) {

    getData('/posts', {
        params: {
            _limit: this.state.pagination.limit,
            _page: current,
            _sort: this.state.sort,
            _order: this.state.order
        }
    })
        .then(data => {
            console.log(data.json);
            this.setState({
                order: this.state.order,
                posts: data.json,
                search: this.state.search,
                pagination: {...this.state.pagination, ...{ page: current }}
            })
        })


  }
  
  onClickOrder(event) {  
    let value = event.target.value;
    getData('/posts', {
        params: {
            _limit: this.state.pagination.limit,
            _search: this.state.search,
            _page: this.state.pagination.page,
            _sort: this.state.sort,
            _order: value
        }
    })
    .then(data => {
        this.setState({
            order: value,
            search: this.state.search,
            pagination: {
                limit: this.state.pagination.limit,
                page: this.state.pagination.page
            },
            posts: data.json
        })
    })
  }
  
  handleSearch(event) {
    let searchValue = event.target.value;
    if (event.key === 'Enter') {
        getData('/posts', {
            params: {
                _limit: this.state.pagination.limit,
                _search: searchValue,
                _page: this.state.pagination.page,
                _order: this.state.order
            }
        })
        .then(posts => {
            this.setState({
                order: this.state.order,
                search: searchValue,
                pagination: {
                    limit: this.state.pagination.limit,
                    page: this.state.pagination.page
                },
                posts: posts
            })
        })
    }    
  }
  
  handleView(event) {
    let viewState = event.currentTarget.value;
    viewState === 'grid' ? this.setState({view:'grid'}) : this.setState({view:'list'});
  }
  
  render() {    
    return <div>
        {this.state.posts.length    ? <Posts
            onClickPaginationNext={this.onClickPaginationNext}
            onClickPaginationPrev={this.onClickPaginationPrev}
            handleView={this.handleView}
            view={this.state.view}
            handleSearch={this.handleSearch}
            search={this.state.search}
            onClickOrder={this.onClickOrder}
            onClickLimit={this.onClickLimit}
            onClickPagination={this.onClickPagination}
            pagination={this.state.pagination}
            order={this.state.order}
            posts={this.state.posts}
            total={this.state.total}
        /> : 'Loading'}
    </div>
  }
}