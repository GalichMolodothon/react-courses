import React from 'react'

import { Navigation } from '../components'
import { Photos } from '../modules/photos/list'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    } 
    
  }
  
  render() {    
    return <div>
        <Photos />
    </div>
  }
}