import React from 'react'
import { Users } from '../modules/users/list'
import {getData} from "../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          users: [],
          pagination: {
              limit: 4,
              page: 1
          },
          total: 0
      };
    this.onClickPagination = this.onClickPagination.bind(this);
  }

  componentDidMount() {
      getData('/users', {
        params: {
          _limit: this.state.pagination.limit,
          _page: this.state.pagination.page,
          _order: this.state.order
        }
      })
      .then(data => {
        this.setState({
            users: data.json,
            total: data.headers.total
        })
      })
  }

  onClickPagination(current) {

      getData('/users', {
          params: {
              _limit: this.state.pagination.limit,
              _page: current,
          }
      })
          .then(data => {
              this.setState({
                  users: data.json,
                  pagination: {...this.state.pagination, ...{ page: current }}
              })
          })


  }

  render() {    
    return <div>
        <Users users={this.state.users}
               pagination={this.state.pagination}
               total={this.state.total}
               onClickPagination={this.onClickPagination}
        />
    </div>
  }
}