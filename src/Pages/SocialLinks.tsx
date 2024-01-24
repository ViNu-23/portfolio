import { FaDribbble, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiFacebook } from "react-icons/fi";

export default function SocialLinks() {
    const socialIcons = {
        color: 'RGBA(0, 0, 0, 0.16)',
        height: '23px',
        width: '23px',
    }
    const links = {
        cursor:'pointer',
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px'
        }}>
            <div>logo</div>
            <div>
                <ul style={{
                    padding: '18px 18px 8px 18px',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '230px'
                }}>
                    <li style={links}><FaDribbble style={socialIcons} /></li>
                    <li style={links}><FaInstagram style={socialIcons} /></li>
                    <li style={links}><FiLinkedin style={socialIcons} /></li>
                    <li style={links}><FiFacebook style={socialIcons} /></li>
                </ul>
            </div>
        </div>
    )
}
