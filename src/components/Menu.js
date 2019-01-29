import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';

import { Posts } from '../pages/Posts'
import { Users } from '../pages/Users'
import { Photos } from '../pages/Photos'
import { Albums } from '../pages/Albums'
//import { Todos } from '../pages/Todos'
//import { Comments } from '../pages/Comments'

export function Menu() {
  return <div>
        <ul className="uk-navbar-nav">
            <li className="uk-active">
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/photos">Photos</Link>
            </li>
            <li>
                <Link to="/albums">Albums</Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
        </ul>
  </div>
}

