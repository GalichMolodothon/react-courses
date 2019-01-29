import React from 'react'

import { User } from './User'
import { Pagination } from '../../../components'
import { Search } from '../../../components'

export function Users(props) {
    return <main className="uk-main">
            <div className="uk-section">
                <div className="uk-container">
                    <User />
                    <ul className="uk-pagination uk-flex-center" uk-margin>
                            <li><a href="#"><span uk-pagination-previous></span></a></li>
                            <li><a href="#">1</a></li>
                            <li className="uk-disabled"><span>...</span></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li className="uk-active"><span>7</span></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#"><span uk-pagination-next></span></a></li>
                        </ul>
                </div>
            </div>
        </main>
}