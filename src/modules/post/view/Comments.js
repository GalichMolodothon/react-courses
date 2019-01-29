import React from 'react'

import { Comment } from './Comment'

export function Comments(props) {
    return   <div>
                <h3 className="uk-margin-remove-top"> Comments: </h3>
                <div className="uk-comments">
                    {props.comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
                </div>
            </div>
}

