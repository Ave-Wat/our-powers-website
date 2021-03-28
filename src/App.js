import React from 'react';
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

  render(){
    if(isMobile){
      return(
        <header>
          <button type="button" onClick={this.navClicked}> <i className="fas fa-bars"></i></button>
          <h1>Our Powers</h1>
          {this.state.isOpen === true &&
            <Navigation
              navClass="mobileNav"
              liClass="mobileLi"
              navLinkClass="mobileNavLink"
            />
            //note: add close button?
          }
        </header>
      );
    } else {
      return(
        <header>
          <h1>Our Powers</h1>
          <Navigation
            navLinkClass="fullScreenNavLink"
          />
        </header>
      );
    }
  }
}

function Navigation(props) {
  const navClass = props.navClass;
  const liClass = props.liClass;
  const navLinkClass = props.navLinkClass;
  return(
    <nav className={navClass}>
      <ul>
        <li className={liClass}><NavLink to='/' className={navLinkClass}>About</NavLink></li>
        <li className={liClass}><NavLink to='/application' className={navLinkClass}>Application</NavLink></li>
        <li className={liClass}><NavLink to='/organization' className={navLinkClass}>Organization</NavLink></li>
        <li className={liClass}><NavLink to='/events' className={navLinkClass}>Events</NavLink></li>
        <li className={liClass}><NavLink to='/eligibility' className={navLinkClass}>Eligibility</NavLink></li>
      </ul>
    </nav>
  );
}

const Main = () => (
    <Switch>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/application' component={Application}></Route>
        <Route exact path='/organization' component={Organization}></Route>
        <Route exact path='/events' component={Events}></Route>
        <Route exact path='/eligibility' component={Eligibility}></Route>
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
  <TextContainer
    title="Application"
    text="This will redirect to a Google Form?"
  />
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
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
