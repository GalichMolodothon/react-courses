import React from 'react'

import { Logo } from './Logo'
import { Menu } from './Menu'

// export function Navigation() {
//   return <nav className="uk-navbar-container uk-margin" data-uk-navbar>
//       <div className="uk-navbar-left">
//           <Logo/>
//           <Menu/>
//       </div>
//   </nav>
// }
export default class extends React.Component {
    render() {
        return (
            <nav className="uk-navbar-container uk-margin" data-uk-navbar>
                <div className="uk-navbar-left">
                    <Logo/>
                    <Menu/>
                </div>
            </nav>
        )
    }
}
