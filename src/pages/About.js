import TextContainer from '../TextContainer.js';
import Sidebar from '../Sidebar.js';

function About () {
  return (
    <div className="sidebarPageContainer">
      <div className="pageContent">
        <TextContainer
        title="OUR POWERS"
        text="OUR POWERS aims to make sexual health and reproductive health conversations and resources more accessible in Eritrean and Ethiopian communities internationally. We hope to empower women to advocate for their sexual health and reproductive rights in their daily lives. This space aims to undo the stigma around these conversations in our communities and begin the process of healing in ourselves and our communities. OUR POWERS is a free five week workshop offered during the month of July. The program is offered completely online during the summer of 2021. Participants will interact with other members and guest speakers through zoom. Join OUR POWERS to participate in focused discussions regarding cultures surrounding reproductive and sexual health for adolescent women and children in Ethiopian and Eritrean communities. OUR POWERS participants are given the opportunity to connect with guest speakers every week to gain a better understanding of cultural influences on contraceptive methods, public health trends, rape culture, sexual and gender idenitity, and mental health. This workshop aspires to create a safe and educational space for open and honest dialogue to occur. OUR POWERS hopes to foster an environment where inquiries and discussions about sexual and reproductive health are answered and encouraged."
        />
        <TextContainer
          title="What We Stand For"
          text={[<div><nobr><h4>O</h4>wnership of our bodies</nobr></div>, <div><nobr><h4>U</h4>plifting each other</nobr></div>, <div><nobr><h4>R</h4>eproductive health knowledge</nobr></div>,<br></br>,<div><nobr><h4>P</h4>owerful changes</nobr></div>, <div><nobr><h4>O</h4>rganizing and building</nobr></div>, <div><nobr><h4>W</h4>omen and girls</nobr></div>, <div><nobr><h4>E</h4>thiopian and Eritrean</nobr></div>, <div><nobr><h4>R</h4>aising our voices</nobr></div>, <div><nobr><h4>S</h4>exual health education</nobr></div>]}
        />
      </div>
      <Sidebar
        title="Apply Now"
        text={["Find our Application ", <a href='https://ave-wat.github.io/our-powers-website/#/application'>here</a>, ".", <p><br></br>The application is due June 1, 2021 at 11:59PM Central Time.</p>]}
      />
    </div>
  );
}

export default About;
