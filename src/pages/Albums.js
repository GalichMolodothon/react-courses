import React from 'react'

import { Albums } from '../modules/albums/list';
import { Pagination } from '../components'
import { getData } from "../api";


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            pagination: {
                limit: 4,
                page: 1
            },
            total: 0,
            userId: '',
            users: [],
            q: ''
        };

        this.handleAlbums = this.handleAlbums.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlerSearch = this.handlerSearch.bind(this);
    }

    componentDidMount() {
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.pagination.page,
                userId: this.state.userId,
                q: this.state.q
            }
        })
            .then(data => {

                this.setState({
                    albums: data.json,
                    total: data.headers.total
                })
            });

        getData('/users')
            .then(data => {
                this.setState({
                    users: data.json
                })
            })
    }

    handleUser(e) {
        let userId = e.target.value;

        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: 1,
                userId: userId,
                q: this.state.q
            }
        })
            .then(data => {
                this.setState({
                    albums: data.json,
                    total: data.headers.total,
                    pagination: {...this.state.pagination, ...{ page: 1 }},
                    userId: userId
                })
            })
    }

    handleAlbums(current) {
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: current,
                userId: this.state.userId
            }
        })
            .then(data => {
                this.setState({
                    albums: data.json,
                    total: data.headers.total,
                    pagination: {...this.state.pagination, ...{ page: current }}
                })
            })
    }

    handlerSearch(e) {
        let q = e.target.value;

        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: 1,
                userId: this.state.userId,
                q: q
            }
        })
            .then(data => {
                this.setState({
                    albums: data.json,
                    total: data.headers.total,
                    pagination: {...this.state.pagination, ...{ page: 1 }},
                    q: q
                })
            })
    }

    render() {
        return <div>
            <Albums
                albums={this.state.albums}
                users={this.state.users}
                handleUser={this.handleUser}
                handlerSearch={this.handlerSearch}
                q={this.state.q}
            />
            <Pagination
                pagination={{
                    page: this.state.pagination.page,
                    limit: this.state.pagination.limit,
                    total: this.state.total
                }}
                onClickPagination={this.handleAlbums}
            />
        </div>
    }
}