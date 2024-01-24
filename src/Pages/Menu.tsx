import { FiUser } from "react-icons/fi";

export default function Menu() {
  const list = {
    padding: "22px 30px",
    color: '#fff',
    background: '#5A39A4',
    fontSize: '18px',
    alignItems:'center'
  }
  const icons = {
    margin: '0px 8px',
    height: '26px',
    width: '26px',
  }
  return (
    <div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
      }}
      >
        <li style={list}><FiUser style={icons} />The Profile</li>
        <li style={list}><FiUser style={icons} />The Experience</li>
        <li style={list}><FiUser style={icons} />Case studies</li>
      </ul>
    </div>
  )
}
