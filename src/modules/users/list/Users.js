import React from 'react'

import { User } from './User'
import { Pagination } from '../../../components'

export function Users(props) {
    return <main className="uk-main">
            <div className="uk-section">
                <div className="uk-container">
                    <User users={props.users}/>
                    <Pagination
                        onClickPagination={props.onClickPagination}
                        pagination={{
                            limit: props.pagination.limit,
                            page: props.pagination.page,
                            total: props.total
                        }}
                    />
                </div>
            </div>
        </main>
}