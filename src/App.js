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
      <li className={liClass}><NavLink to='/' className={navLinkClass} onClick={this.closeNav}>About</NavLink></li>
      <li className={liClass}><NavLink to='/application' className={navLinkClass} onClick={this.closeNav}>Application</NavLink></li>
      <li className={liClass}><NavLink to='/organization' className={navLinkClass} onClick={this.closeNav}>Organization</NavLink></li>
      <li className={liClass}><NavLink to='/events' className={navLinkClass} onClick={this.closeNav}>Events</NavLink></li>
      <li className={liClass}><NavLink to='/eligibility' className={navLinkClass} onClick={this.closeNav}>Eligibility</NavLink></li>
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
  text="OUR POWERS aims to make sexual health and reproductive health conversations and resources more accessible in Eritrean and Ethiopian communities internationally. We hope to empower women to advocate for their sexual health and reproductive rights in their daily lives. This space aims to undo the stigma around these conversations in our communities and begin the process of healing in ourselves and our communities."
  />
  <TextContainer
  text="OUR POWERS is a free five week workshop offered during the month of July. The program is offered completely online during the summer of 2021. Participants will interact with other members and guest speakers through zoom. Join OUR POWERS to participate in focused discussions regarding cultures surrounding reproductive and sexual health for adolescent women and children in Ethiopian and Eritrean communities. OUR POWERS participants are given the opportunity to connect with guest speakers every week to gain a better understanding of cultural influences on contraceptive methods, public health trends, rape culture, sexual and gender idenitity, and mental health. This workshop aspires to create a safe and educational space for open and honest dialogue to occur. OUR POWERS hopes to foster an environment where inquiries and discussions about sexual and reproductive health are answered and encouraged."
  />
  </div>
);

const Application = () => (
  <div className="pageContent">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8Oe6U80kLKi4KJGVPOSBn9kQOR662Dj32hAIlUvyN0lA0OA/viewform?embedded=true" width="640" height="1360" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
);

const Organization = () => (
  <div className="pageContent">
  <TextContainer
    text="Summer 2020: Betelhem led a series of sexual health and reproductive health workshops for Ethiopian and Eritrean girls and young women as an intern with Celia Thomas who was a Health Educator working at Seattle & King County Public Health Department. Within these series, topics such as sex, contraceptive health, rape culture, gender and sexual health identity, among others, were discussed within the context of the Eritrean and Ethiopian communities. Eledon, Amra, and Betelhem met during these conversations."
  />
  <TextContainer
    text="September 2020: OUR POWERS was launched when Eledon reached out to Betelhem wanting to continue and expand the series. Eledon wanted to make it reach more young women and girls with these conversations. This started the process of formalizing the workshops to include guest speakers and an official website. Amra joined and supported the planning a few months later as she was also passionate about women and girl’s health."
  />
  </div>
);

function Events () {

  return (
    <div className="pageContent">
    <TextContainer
    text="OUR POWERS is a new five-week summer workshop. Each week, there will be a different focus on sexual health and reproductive health. We will bring in guest speakers to inform and guide the conversations. The workshop is organized so there are two sessions every week. The purpose of the first session is to introduce the week’s topic, presented by a guest speaker. The second session is conducted by the workshop directors in smaller groups to openly discuss the week’s topic. There are activities and questions during the second sessions of each week to guide and encourage participants to have dialogue about how they experience and see each of the topics within their lives and communities."
    />

    <TextContainer
    text={["OUR POWERS is an entirely virtual workshop, so all sessions will be held over zoom. The topics covered for summer 2021 including the date of each session are as follows:",
      <ul>
      <li>
      Week 1
      <p>Dates: June 30, 2021 & July 3, 2021</p>
      <p>Topic: Reproductive Health and Contraceptive Methods</p> <p>Speakers:</p>
      </li>
      <li>
      Week 2
      <p>Dates: July 07, 2021 & July 10, 2021 </p>
      <p>Topic:</p>
      </li>
      <li>
      Week 3
      <p>Dates: July 14, 2021 & July 17, 2021</p>
      <p>Topic: Rape Culture</p>
      </li>
      <li>
      Week 4
      <p>Dates: July 21, 2021 & July 24, 2021</p>
      <p>Topic: Gender Identity and Sexual Health</p>
      </li>
      <li>
      Week 5
      <p>Dates: July 28, 2021 & July 31, 2021</p>
      <p>Topic: Mental Health and Resources</p>
      </li>
      </ul>]}
    />
    <TextContainer
    text="Reminder: we will be meeting over zoom on Wednesdays and Saturdays for the Month of July 2021. Specific times will be confirmed once we have the group and their availability."
    />
    </div>
  );
}

const Eligibility = () => (
  <div className="pageContent">
  <TextContainer
  text="Any Ethiopian and/or Eritrean that identifies as a person passionate and interested in interacting with and expanding proper education regarding sexul and reproductive health representation is welcome to participate in the workshop. The topics covered in the workshop will lean heavily towards young women and children’s experiences in Ethiopia and Eritrea. This workshop will especially be useful for individuals with Ethiopian and Eritrean backgrounds. Please fill out this consent form before coming to the first meeting. If you need a hard copy sent to you, please let us know."
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
  const text = props.text;
  const list = props.list;
  return (
    <div className="textContainer">
    <div>{text}</div>
    </div>
  );
}

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
