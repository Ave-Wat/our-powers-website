import TextContainer from '../TextContainer';

function Events () {
  return (
    <div className="soloPageContent">
      <TextContainer
        title="Structure"
        text="OUR POWERS is a new five-week summer workshop. Each week, there will be a different focus on sexual health and reproductive health. We will bring in guest speakers to inform and guide the conversations. The workshop is organized so there are two sessions every week. The purpose of the first session is to introduce the week’s topic, presented by a guest speaker. The second session is conducted by the workshop directors in smaller groups to openly discuss the week’s topic. There are activities and questions during the second sessions of each week to guide and encourage participants to have dialogue about how they experience and see each of the topics within their lives and communities."
      />

      <TextContainer
        title="Timeline"
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

export default Events;
