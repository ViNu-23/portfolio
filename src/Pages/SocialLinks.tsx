import { FaDribbble, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiFacebook } from "react-icons/fi";

export default function SocialLinks() {
   
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
                    padding: '18px 18px 14px 18px',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '230px'
                }}>
                    <li style={links} className="social-icons"><a href="https://dribbble.com/Sourabhkulkarni37"><FaDribbble  className="icons"/></a></li>
                    <li style={links} className="social-icons"><a href="https://www.instagram.com/sdkuidesigner/"><FaInstagram   className="icons"/></a></li>
                    <li style={links} className="social-icons"><a href="https://www.linkedin.com/in/sourabh-kulkarni-5a115b4a/"><FiLinkedin className="icons"/></a></li>
                    <li style={links} className="social-icons"><a href="https://dribbble.com/Sourabhkulkarni37"><FiFacebook   className="icons"/></a></li>
                </ul>
            </div>
        </div>
    )
}
