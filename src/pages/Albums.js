import React from 'react'

import { Navigation } from '../components'
import { Albums } from '../modules/albums/list'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    } 
    
  }
  
  render() {    
    return <div>
        <Albums />
    </div>
  }
}