import TextContainer from '../TextContainer';
import Sidebar from '../Sidebar';
import form from '../documents/consent_form.pdf'

const Eligibility = () => (
  <div className="sidebarPageContainer">
    <div className="pageContent">
      <TextContainer
        title="Eligibility"
        text={[<p>Any Ethiopian and/or Eritrean that identifies as a person passionate and interested in interacting with and expanding proper education regarding sexual and reproductive health representation is welcome to participate in the workshop. The topics covered in the workshop will lean heavily towards young women and children’s experiences in Ethiopian and Eritrean communities. This workshop will especially be useful for individuals with Ethiopian and Eritrean backgrounds. Please fill out this <a href={form} target="_blank">consent form</a> before coming to the first meeting. If you need a hard copy sent to you, please let us know.</p>]}
      />
    </div>
    <Sidebar
      title="Apply Now"
      text={["Find our Application ", <a href='https://ourpowers.org/#/application'>here</a>, ".", <p><br></br>The application is due June 1, 2021 at 11:59PM Central Time.</p>]}
    />
  </div>
);

export default Eligibility;
