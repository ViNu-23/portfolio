import Menu from "./Menu";
import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <>
      <SocialLinks />
      <div style={{
        display: 'flex',
        padding: '20px',
        height: '70vh',
        alignItems: 'center'
      }}>
        <div style={{
          width: '65%'
        }}>
          <div style={{ fontWeight: 'bold' }}>Hi, I am Sourabh D. Kulkarni</div>
          <div style={{
            color: '#7B2095',
            fontSize: '40px',
            fontFamily: 'Roboto, sans-serif'
          }}>
            UI/UX Designer</div>
          <div style={{
            margin: '24px 0px'
          }}>Started my career in 2009 as 3D Artist/Graphic Designer and changed career
            direction to UI UX Design in 2015.
            Provided design solutions for diffrent type of projects and successfully delivered
            Web & Mobile Applications, Corporate Websites and Brand Identity</div>
          <button style={{
            padding: '8px 16px',
            borderRadius: '6px',
            background: '#fff',
            border: '1px solid RGBA(0, 0, 0, 0.28)',
            boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
            fontFamily: 'Roboto, sans-serif',
            color: 'RGBA(0, 0, 0, 0.28)',
fontSize:'12px'
          }}>View My Portfolio</button>
        </div>
        <div>image</div>
      </div>
      <Menu />
    </>
  )
}
