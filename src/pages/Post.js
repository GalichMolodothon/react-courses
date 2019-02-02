import React from 'react';
import { getPost } from '../api'
import { getUserById } from '../api'
import { getCommentsByPostId } from '../api'

import { Breadcrumbs } from '../components'
import { Title } from '../modules/post/view'
import { Content } from '../modules/post/view'
import { Comments } from '../modules/post/view'
import { Form } from '../modules/post/view'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.match.params.id,
            author: '',
            comments: [],
            post: {}
        }
    }
    
    componentDidMount() {
        getPost({
            postId: this.state.postId
        })
        .then(post => {
            this.setState({
                post: post
            })
            //get post's author
            getUserById(
                post.userId
            )
            .then(author => {
                this.setState({
                author: author
                })
            })
            //get post's comments
            getCommentsByPostId(
                post.id
            )
            .then(comments => {
                this.setState({
                comments: comments
                })
            })
        })
    }                                                                     
    
    render() {
         return <div>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Breadcrumbs/>
                        <Title post={this.state.post} author={this.state.author.name}/>
                        <Content post={this.state.post}/>
                        <Comments comments={this.state.comments}/>
                        <Form/>
                    </div>
                </div>
            </main>
        </div>
    }
}