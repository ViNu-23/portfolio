import { FiUser } from 'react-icons/fi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LuPencilRuler } from 'react-icons/lu';
import { Link } from "react-router-dom";
import { LuFileSearch } from "react-icons/lu";
import './style.css'

export default function Menu() {
  const icons = {
    margin: '0px 8px',
    height: '22px',
    width: '22px',
  };

  return (
    <div style={{ opacity: '100%', background: '#F5F7F8' }} className='menu-item'>
      <ul
        style={{
          width: '100%',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className='list'>
            <FiUser style={icons} />
            <span className='text-navLinks'>Profile</span>
          </li>
        </Link>
        <Link to="/Experience" style={{ textDecoration: 'none' }}>
          <li className='list' >
            <IoBriefcaseOutline style={icons} />
            <span className='text-navLinks'>Experience</span>
          </li>
        </Link>
        <Link to="/Project" style={{ textDecoration: 'none' }}>
          <li className='list'>
            <LuPencilRuler style={icons} />
            <span className='text-navLinks'>Projects</span>
          </li>
        </Link>
        <Link to="/CaseStudies" style={{ textDecoration: 'none' }}>
          <li className='list'>
            <LuFileSearch style={icons} />
            <span className='text-navLinks'>Case studies</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
