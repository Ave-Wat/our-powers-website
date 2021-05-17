import TextContainer from '../TextContainer';
import Sidebar from '../Sidebar';

function Events () {
  return (
    <div className="sidebarPageContainer">
      <div className="pageContent">
        <TextContainer
          title="Structure"
          text="OUR POWERS is a new five-week summer workshop. Each week, there will be a different focus on sexual health and reproductive health. We will bring in guest speakers to inform and guide the conversations. The workshop is organized so there are two sessions every week. The purpose of the first session is to introduce the week’s topic, presented by a guest speaker. The second session is conducted by the workshop directors in smaller groups to openly discuss the week’s topic. There are activities and questions during the second sessions of each week to guide and encourage participants to have dialogue about how they experience and see each of the topics within their lives and communities."
        />

        <TextContainer
          title="Timeline"
          text={["OUR POWERS is an entirely virtual workshop, so all sessions will be held over zoom. The topics covered for summer 2021 including the date of each session are as follows:",
          <div>
            <br></br>
            <h3>Week 1</h3>
            <p>Dates: June 30, 2021 & July 3, 2021</p>
            <p>Topic: Reproductive Health and Contraceptive Methods</p>
            <p>Speakers: Eledon Beyene, Betelhem Muno, and Amra Zegeye</p>
            <h3>Week 2</h3>
            <p>Dates: July 07, 2021 & July 10, 2021 </p>
            <p>Topic: Useful and Effective Implementations of Reproductive Health Awareness</p>
            <p>Guest Speaker: Ketema Bizuneh</p>
            <ul><p>UNICEF Chief of Health for Kenya and South Sudan</p></ul>
            <h3>Week 3</h3>
            <p>Dates: July 14, 2021 & July 17, 2021</p>
            <p>Topic: Rape Culture</p>
            <p>Guest Speaker: Iman Mustafa</p>
            <ul><p>Iman is a Seattle-area organizer and activist dedicated to building the power of communities of color, incarcerated individuals, and immigrant communities. As a first-generation Black Muslim woman, Iman’s life experiences have given her insight into the systemic oppression that permeates the lives of the people she serves. In recognition of her work, Iman was selected as a 2019 Public Policy and International Affairs Fellow at the University of California, Berkeley studying the intersection of education and law. This propelled Iman into public service where she currently serves as part of the Rainier Beach Action Coalition Board, Puget Sound Community Leadership Institute Fellowship, and the George Jackson Freedom Coalition. She participates in a Black Dialogue Series Collective to facilitate dialogues on unity and collective action of the Black diaspora in her city and beyond. Most recently, she is a Podcast Founder & Co-Host of Keeping it Real with Mani and Lani which discusses our nation's most pressing policy and legal issues while celebrating the power of Black culture, media, and strategy. Iman is also a proud member of Zeta Phi Beta Sorority Incorporated.</p></ul>
            <h3>Week 4</h3>
            <p>Dates: July 21, 2021 & July 24, 2021</p>
            <p>Topic: Gender Identity and Sexual Health</p>
            <p>Guest Speaker: Faris Cuchi</p>
            <ul><p>Faris is an intersectional LGBTIQ+/human rights activist based in Vienna, who oversees House of Guramayle’s activities in Austria. They are the co-host and creator of the Alen Show, which dismantles dishonest information about the Ethiopian LGBTIQ+ community one episode at a time. Faris is a computer science graduate and has worked as an IT expert with the INGO PSI-Ethiopia. They are also a Salzburg Global Seminar Fellow.</p><p>More information can be found <a href="https://houseofguramayle.org/our-story/">here</a>.</p></ul>
            <h3>Week 5</h3>
            <p>Dates: July 28, 2021 & July 31, 2021</p>
            <p>Topic: Mental Health and Resources</p>
            <p>Guest Speaker: Lona Medhane</p>
            <ul><p>Lona is a Seattle-area activist dedicated to empowering marginalized communities through mental health education while promoting healthy trauma healing habits. As a first generation Black woman, Lona’s life experiences have led her to have a deeper understanding of how intergenerational trauma and mental illnesses can have negative long term effects on communities that don't have access to services and/or education to guide them through the hardships in familial and other relationships. In recognition of her work, she currently is a Podcast Founder & Co-Host of Keeping it Real with Mani and Lani  which opens discussion about the intersectionality of identities and oppression globally while also celebrating the power of Black culture, media, and strategy. Lona is also a proud member of Zeta Phi Beta Sorority Incorporated.</p></ul>
          </div>]}
        />
        <TextContainer
          text="Reminder: we will be meeting over zoom on Wednesdays and Saturdays for the Month of July 2021. Specific times will be confirmed once we have the group and their availability."
        />
      </div>
      <Sidebar
        title="Apply Now"
        text={["Find our Application ", <a href='https://ave-wat.github.io/our-powers-website/#/application'>here</a>, ".", <p><br></br>The application is due June 1, 2021 at 11:59PM Central Time.</p>]}
      />
    </div>
  );
}

export default Events;
