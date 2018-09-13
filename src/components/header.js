import React from 'react'
import Link from 'gatsby-link'
import './Header.css';


const Header = ({ siteTitle }) => (
  <div>
    <div className="header">
      <div className="header__group">
        <Link to = "/"><img src={require('../images/logo-react.png')} width="40"/></Link>
        <Link to = "/link1">Link1</Link>
        <Link to = "/link2">Link2</Link>
        <Link to = "/link3">Link3</Link>
        <Link to = "/buy"><button>Btn</button></Link>
      </div>
    </div>
  </div>
)

export default Header
