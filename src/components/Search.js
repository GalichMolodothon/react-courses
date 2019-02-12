import React from 'react'

export function Search(props) {
  return <form className="uk-width-small uk-margin-right" >
            <input
                className="uk-input"
                type="search"
                value={props.search}
                onChange={props.handleSearch}
                placeholder="Search..."
               />
         </form>
}


