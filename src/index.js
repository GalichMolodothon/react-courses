import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
   
import PostPage from './pages/Post'
import PostsPage from './pages/Posts'
import Albums from './pages/Albums'
import Photos from './pages/Photos'
import Users from './pages/Users'
import App from './App'


import Navigation from './components/Navigation'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

//ReactDOM.render(<Navigation />, document.getElementById('root'));
