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
