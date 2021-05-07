import TextContainer from '../TextContainer.js';
import Sidebar from '../Sidebar.js';

function About () {
  return (
    <div className="sidebarPageContainer">
      <div className="pageContent">
        <TextContainer
        title="OUR POWERS..."
        text="aims to make sexual health and reproductive health conversations and resources more accessible in Eritrean and Ethiopian communities internationally. We hope to empower women to advocate for their sexual health and reproductive rights in their daily lives. This space aims to undo the stigma around these conversations in our communities and begin the process of healing in ourselves and our communities."
        />
        <TextContainer
        text="OUR POWERS is a free five week workshop offered during the month of July. The program is offered completely online during the summer of 2021. Participants will interact with other members and guest speakers through zoom. Join OUR POWERS to participate in focused discussions regarding cultures surrounding reproductive and sexual health for adolescent women and children in Ethiopian and Eritrean communities. OUR POWERS participants are given the opportunity to connect with guest speakers every week to gain a better understanding of cultural influences on contraceptive methods, public health trends, rape culture, sexual and gender idenitity, and mental health. This workshop aspires to create a safe and educational space for open and honest dialogue to occur. OUR POWERS hopes to foster an environment where inquiries and discussions about sexual and reproductive health are answered and encouraged."
        />
      </div>
      <Sidebar
        title="Apply Now"
        text={["Find our Application ", <a href='https://ave-wat.github.io/our-powers-website/#/application'>here</a>, ".", <p><br></br>The application is due June 1, 2021 at 11:59PM Central Time.</p>]}/>
    </div>
  );
}

export default About;
