import React from 'react';
import logo from './logo.png'
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import {isMobile} from 'react-device-detect';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className="pageContainer">
        <Main/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

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
          <li className={liClass}><NavLink to='/our-powers-website/' className={navLinkClass} onClick={this.closeNav}>About</NavLink></li>
          <li className={liClass}><NavLink to='/our-powers-website/application' className={navLinkClass} onClick={this.closeNav}>Application</NavLink></li>
          <li className={liClass}><NavLink to='/our-powers-website/organization' className={navLinkClass} onClick={this.closeNav}>Organization</NavLink></li>
          <li className={liClass}><NavLink to='/our-powers-website/events' className={navLinkClass} onClick={this.closeNav}>Events</NavLink></li>
          <li className={liClass}><NavLink to='/our-powers-website/eligibility' className={navLinkClass} onClick={this.closeNav}>Eligibility</NavLink></li>
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

const Main = () => (
    <Switch>
        <Route exact path='/our-powers-website/' component={About}></Route>
        <Route exact path='/our-powers-website/application' component={Application}></Route>
        <Route exact path='/our-powers-website/organization' component={Organization}></Route>
        <Route exact path='/our-powers-website/events' component={Events}></Route>
        <Route exact path='/our-powers-website/eligibility' component={Eligibility}></Route>
    </Switch>
);

const About = () => (
  <div className="pageContent">
    <TextContainer
      title="About"
      text="Our Powers ..."
    />
  </div>
);

const Application = () => (
  <div className="pageContent">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8Oe6U80kLKi4KJGVPOSBn9kQOR662Dj32hAIlUvyN0lA0OA/viewform?embedded=true" width="640" height="958" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
);

const Organization = () => (
  <div className="pageContent">
  <TextContainer
    title="Organization"
    text="Our Powers ..."
  />
  </div>
);

const Events = () => (
  <div className="pageContent">
  <TextContainer
    title="Events"
    text="Our Powers will bring in several speakers ..."
  />
  </div>
);

const Eligibility = () => (
  <div className="pageContent">
  <TextContainer
    title="Eligibility"
    text="You are encouraged to apply ..."
  />
  </div>
);

function Sidebar() {
  if(!isMobile){
    return (
      <div className="sidebar">
        sidebar
      </div>
    );
  } else {
    return null;
  }
}

const Footer = () => (
  <div className="footer">
    footer
  </div>
);

function TextContainer(props){
  const title = props.title;
  const text = props.text;

  return (
    <div className="textContainer">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;
