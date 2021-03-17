import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Our Powers</h1>
        <Navigation/>
      </header>
      <div className="pageContainer">
        <Main/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>About</NavLink></li>
      <li><NavLink to='/application'>Application</NavLink></li>
      <li><NavLink to='/organization'>Organization</NavLink></li>
      <li><NavLink to='/events'>Events</NavLink></li>
      <li><NavLink to='/eligibility'>Eligibility</NavLink></li>
    </ul>
  </nav>
);

const About = () => (
  <div className="pageContent">
    about
  </div>
);

const Application = () => (
  <div className="pageContent">
    application
  </div>
);

const Organization = () => (
  <div className="pageContent">
    organization
  </div>
);

const Events = () => (
  <div className="pageContent">
    events
  </div>
);

const Eligibility = () => (
  <div className="pageContent">
    eligibility
  </div>
);

const Sidebar = () => (
  <div className="sidebar">
    sidebar
  </div>
);

const Footer = () => (
  <div className="footer">
    footer
  </div>
);

const Main = () => (
    <Switch>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/application' component={Application}></Route>
        <Route exact path='/organization' component={Organization}></Route>
        <Route exact path='/events' component={Events}></Route>
        <Route exact path='/eligibility' component={Eligibility}></Route>
    </Switch>
);

export default App;
