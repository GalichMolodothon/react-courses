import React from 'react'

import { Photo } from './Photo'
import { Search } from '../../../components'

export function Photos(props) {
    return <main className="uk-main">
            <div className="uk-section">
            <div className="uk-container">
                <div className="uk-margin-medium-bottom uk-flex">
                    <Search />
                    {/*<select className="uk-select uk-width-small uk-margin-left">*/}
                        {/*<option value="all">All</option>*/}
                        {/*<option value="1">Album 1</option>*/}
                        {/*<option value="2">Album 2</option>*/}
                        {/*<option value="3">Album 3</option>*/}
                    {/*</select>*/}
                    <select className="uk-select uk-width-small uk-margin-left"
                            value={props.userId}
                            onChange={props.handleAlbums}
                            disabled={props.albums.length > 0 ? false : true}>
                        <option value="">All</option>
                        {props.albums.map(album => {
                            return <option key={album.id} value={album.id}>{album.title}</option>
                        })}
                    </select>
                </div>
                <Photo photos={props.photos} />
                <ul className="uk-more uk-text-center uk-margin-medium-top">
                    <button className="uk-button uk-button-primary" onClick={props.handleLoadMore}>
                        Load more
                        {/* <div uk-spinner></div> */}
                    </button>
                </ul>
            </div>
        </div>
    </main>
}