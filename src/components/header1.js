import React from 'react'
import Link from 'gatsby-link'
import './Header.css';

class Header extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50 ){
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render(){
    return(
        <div>
        <div className={this.state.hasScrolled ? 'header HeaderScrolled' : 'header'}>
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
  }
}

export default Header
