import React from 'react'

import { Navigation } from '../components'
import { Users } from '../modules/users/list'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    } 
    
  }
  
  render() {    
    return <div>
        <Users />
    </div>
  }
}