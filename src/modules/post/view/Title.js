import React from 'react'

export function Title(props) {
  return <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>{props.post.title}</span>
          <a className="uk-text-small" href="/">{props.author}</a>
        </h1>
}