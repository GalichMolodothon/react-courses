import React from 'react'

export function Content(props) {
  return <div className="uk-article uk-dropcap uk-margin-large-bottom">
          {props.post.body}
        </div>
}
