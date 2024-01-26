import SocialLinks from './SocialLinks';
import Menu from './Menu';
export default function Home() {
  return (
    <>
      <SocialLinks />
      <div
        style={{
          display: 'flex',
          padding: '25px 0px 25px 25px',
          height: '60vh',
          marginBottom: '150px',
          justifyContent: 'space-between'
        }}
      >
        <div className='content-info'
          style={{
            width: '100%',
           marginTop:'12% '
          }}
        >
          <div style={{ fontWeight: 'bold' }}>Hi, I am Sourabh D. Kulkarni</div>
          <div
            style={{
              color: '#7B2095',
              fontSize: '40px',
              fontFamily: 'Roboto, sans-serif',
              width: '100%',
              letterSpacing: '2px'
            }}
          >
            UI/UX Designer
          </div>
          <div style={{ margin: '30px 0px', width: '100%' }}>
            Started my career in 2009 as a 3D Artist/Graphic Designer and changed career
            direction to UI UX Design in 2015. Provided design solutions for different
            types of projects and successfully delivered Web & Mobile Applications, Corporate
            Websites, and Brand Identity.
          </div>
          <button className='cv-button'>
          <a className='anchor' href='../Images/portfolio.pdf' download='Sourabh D.Kulkarni.pdf'>
            Download My Portfolio
            </a>
          </button>
        </div>
        <div className='profile-container'><img src='../Images/Picture2.png' alt='profile-img' style={{ height: '555px' }} className='profile-img' /></div>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        <Menu />
      </div>
    </>
  );
}
