import { FiUser } from 'react-icons/fi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LuPencilRuler } from 'react-icons/lu';
import { PiListMagnifyingGlass } from 'react-icons/pi';
import { Link } from "react-router-dom";

export default function Menu() {
  const list = {
    padding: '22px 30px',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center', // Center vertically
  };

  const icons = {
    margin: '0px 8px',
    height: '22px',
    width: '22px',
  };

  return (
    <div style={{ opacity: '100%', background: '#F5F7F8' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
         <Link to="/">
         <li style={list}>
          <FiUser style={icons} />
          The Profile
        </li>
      </Link>
       
      <Link to="/Experience">
      <li style={list}>
          <IoBriefcaseOutline style={icons} />
          The Experience
        </li>
      </Link>
      <Link to="/Project">
      <li style={list}>
          <LuPencilRuler style={icons} />
          The Projects
        </li>
      </Link>
      <Link to="/CaseStudies">
      <li style={list}>
          <PiListMagnifyingGlass style={icons} />
          Case studies
        </li>
      </Link>



        
       
        
      </ul>
    </div>
  );
}
