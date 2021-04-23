import {isMobile} from 'react-device-detect';

function Sidebar (props) {
  const title = props.title;
  const text = props.text;

  if(!isMobile){
    return (
      <div className="sidebar">
        <div className="sidebarTextContainer">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  }
  return null;
}

export default Sidebar;
