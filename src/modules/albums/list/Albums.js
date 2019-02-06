import React from 'react'

import { Album } from './Album'
import { Search } from '../../../components'

export function Albums(props) {
    return <main className="uk-main">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-margin-medium-bottom uk-flex">
                        <form className="uk-width-medium uk-margin-auto-right">
                            <input
                                className="uk-input"
                                type="search"
                                value={props.q}
                                onChange={props.handlerSearch}
                                placeholder="Search..."
                            />
                        </form>
                        <select className="uk-select uk-width-small uk-margin-left"
                                value={props.userId}
                                onChange={props.handleUser}
                                disabled={props.users.length > 0 ? false : true}>
                            <option value="">All</option>
                            {props.users.map(user => {
                                return <option key={user.id} value={user.id}>{user.name}</option>
                            })}
                        </select>
                    </div>
                    <Album albums={props.albums} />
                </div>
            </div>
        </main>
}