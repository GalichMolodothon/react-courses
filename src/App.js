import React from "react";
import {Route} from 'react-router-dom';

import Post from './pages/Post'
import Posts from './pages/Posts'
import Albums from './pages/Albums'
import Photos from './pages/Photos'
import Users from './pages/Users'
import Navigation from './components/Navigation'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                {/*<Switch>*/}
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/users" component={Users} />
                    <Route path="/photos" component={Photos} />
                    <Route path="/albums" component={Albums} />
                    <Route path='/posts/:id' component={Post}/>
                {/*</Switch>*/}
            </div>
        );
    }
}