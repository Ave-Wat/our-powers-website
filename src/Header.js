import React from 'react';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    };
    this.navClicked = this.navClicked.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  navClicked(event){
    if(!this.state.isOpen){
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  }

  closeNav(event){
    this.setState({
      isOpen: false
    });
  }

  Navigation = (props) => {
    const navClass = props.navClass;
    const liClass = props.liClass;
    const navLinkClass = props.navLinkClass;
    return(
      <nav className={navClass}>
      <ul>
      <li className={liClass}><NavLink to='/' className={navLinkClass} onClick={this.closeNav}>About</NavLink></li>
      <li className={liClass}><NavLink to='/application' className={navLinkClass} onClick={this.closeNav}>Application</NavLink></li>
      <li className={liClass}><NavLink to='/events' className={navLinkClass} onClick={this.closeNav}>Events</NavLink></li>
      <li className={liClass}><NavLink to='/eligibility' className={navLinkClass} onClick={this.closeNav}>Eligibility</NavLink></li>
      <li className={liClass}><NavLink to='/history' className={navLinkClass} onClick={this.closeNav}>History</NavLink></li>
      </ul>
      </nav>
    );
  }

  render(){
    if(isMobile){
      return(
        <header>
        <button type="button" onClick={this.navClicked}> <i className="fas fa-bars"></i></button>
        <h1>OUR POWERS</h1>
        {this.state.isOpen === true &&
          <this.Navigation
          navClass="mobileNav"
          liClass="mobileLi"
          navLinkClass="mobileNavLink"
          />
        }
        </header>
      );
    } else {
      return(
        <header>
        <div id="header-top">
        <h1>OUR POWERS</h1>
        <img id="logo" src={logo} />
        </div>
        <this.Navigation
        navLinkClass="fullScreenNavLink"
        />
        </header>
      );
    }
  }
}

export default Header;
