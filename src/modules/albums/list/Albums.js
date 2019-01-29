import React from 'react'

import { Album } from './Album'
import { Pagination } from '../../../components'
import { Search } from '../../../components'

export function Albums(props) {
    return <main className="uk-main">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-margin-medium-bottom uk-flex">
                        <Search />
                        <select className="uk-select uk-width-small uk-margin-left">
                            <option value="all">All</option>
                            <option value="1">User 1</option>
                            <option value="2">User 2</option>
                            <option value="3">User 3</option>
                        </select>

                    </div>
                    <Album />
                    <ul className="uk-pagination uk-flex-center" uk-margin>
                        <li><a href="#"><span uk-pagination-previous></span></a></li>
                        <li><a href="#">{1}</a></li>
                        <li className="uk-disabled"><span>{'...'}</span></li>
                        <li><a href="#">{5}</a></li>
                        <li><a href="#">{6}</a></li>
                        <li className="uk-active"><span>7</span></li>
                        <li><a href="#">{8}</a></li>
                        <li><a href="#"><span uk-pagination-next></span></a></li>
                    </ul>
                </div>
            </div>
        </main>
}