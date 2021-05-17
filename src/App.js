import React from 'react';
import logo from './logo.png'
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import Header from './Header.js';
import About from './pages/About.js';
import Application from './pages/Application.js';
import History from './pages/History.js';
import Events from './pages/Events.js';
import Eligibility from './pages/Eligibility';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className="pageContainer">
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={About}></Route>
    <Route exact path='/application' component={Application}></Route>
    <Route exact path='/events' component={Events}></Route>
    <Route exact path='/eligibility' component={Eligibility}></Route>
    <Route exact path='/history' component={History}></Route>
  </Switch>
);

const Footer = () => (
  <div className="footer">
    <h2>Contact Us</h2>
    <p><a href="mailto:OURPOWERS.ethieri@gmail.com">OURPOWERS.ethieri@gmail.com</a></p>
    <p>Follow us on Instagram <a href="https://www.instagram.com/ourpowers.ethieri/">@ourpowers.ethieri</a></p>
  </div>
);

function List(props) {
  const items = props.value;
  const listItems = items.map((item) =>
    <li key={item}>
      {item}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default App;
