import React from 'react'

import { getPosts } from '../api'
import { Navigation } from '../components'
import { Posts } from '../modules/post/list'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [],
      order: 'asc',
      search: '',
      view:'grid',
      pagination: {
        limit: 6,
        page: 1
      }
    } 
    
    this.onClickPagination = this.onClickPagination.bind(this);
    this.onClickLimit = this.onClickLimit.bind(this);
    this.onClickOrder = this.onClickOrder.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleView = this.handleView.bind(this);
    this.onClickPaginationPrev = this.onClickPaginationPrev.bind(this);
    this.onClickPaginationNext = this.onClickPaginationNext.bind(this);
  }
  
  componentDidMount() {
    getPosts({
        limit: this.state.pagination.limit,
        page: this.state.pagination.page,
        search: this.state.search,
        order: this.state.order
    })
    .then(posts => {
        this.setState({
            posts: posts
        })
    })
  }
  
  onClickLimit(event) {
      
    let value = event.target.value;

    getPosts({
        limit: value,
        page: this.state.pagination.page,
        search: this.state.search,
        order: this.state.order
    })
    .then(posts => {
        this.setState({
            order: this.state.order,
            search: this.state.search,
            pagination: {
                limit: value,
                page: this.state.pagination.page
            },
            posts: posts
        })
    })
  }
  
  onClickPaginationPrev(value) {
        if (this.state.pagination.page !== 1) {

            getPosts({
                limit: this.state.pagination.limit,
                page: this.state.pagination.page - value,
                order: this.state.order,
                search: this.state.search
            })
                .then(posts => {
                    this.setState({
                        pagination: {
                            limit: this.state.pagination.limit,
                            page: this.state.pagination.page - value
                        },
                        posts: posts
                    })
                })
        } else {
            return true;
        }
    }

    onClickPaginationNext(value, pages) {

        if (pages !== this.state.pagination.page) {
            getPosts({
                limit: this.state.pagination.limit,
                page: this.state.pagination.page + value,
                order: this.state.order,
                search: this.state.search
            })
                .then(posts => {
                    this.setState({
                        pagination: {
                            limit: this.state.pagination.limit,
                            page: this.state.pagination.page + value,
                        },
                        posts: posts
                    })
                })
        } else {
            return true;
        }
    }
  
  onClickPagination(current) {

    getPosts({
        limit: this.state.pagination.limit,
        page: current,
        search: this.state.search,
        order: this.state.order
    })
    .then(posts => {
        this.setState({
            order: this.state.order,
            search: this.state.search,
            pagination: {
                limit: this.state.pagination.limit,
                page: current,
            },
            posts: posts
        })
    })
  }
  
  onClickOrder(event) {  
    let value = event.target.value;
    getPosts({
        limit: this.state.pagination.limit,
        search: this.state.search,
        page: this.state.pagination.page,
        order: value
    })
    .then(posts => {
        this.setState({
            order: value,
            search: this.state.search,
            pagination: {
                limit: this.state.pagination.limit,
                page: this.state.pagination.page
            },
            posts: posts
        })
    })
  }
  
  handleSearch(event) {
    let searchValue = event.target.value;
    if (event.key === 'Enter') {
        getPosts({
            limit: this.state.pagination.limit,
            search: searchValue,
            page: this.state.pagination.page,
            order: this.state.order
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
        {this.state.posts.length ? <Posts onClickPaginationNext={this.onClickPaginationNext} onClickPaginationPrev={this.onClickPaginationPrev} handleView={this.handleView} view={this.state.view} handleSearch={this.handleSearch} search={this.state.search} onClickOrder={this.onClickOrder} onClickLimit={this.onClickLimit} onClickPagination={this.onClickPagination} pagination={this.state.pagination} order={this.state.order} posts={this.state.posts}/> : 'Loading'}
    </div>
  }
}