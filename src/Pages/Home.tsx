import SocialLinks from './SocialLinks';
import Menu from './Menu';
import Experience from './Experience';
import CaseStudies from './CaseStudies';
import Project from './Project';

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
        <div
          style={{
            width: '65%',
            marginTop: '110px',
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
          <div style={{ margin: '30px 0px' }}>
            Started my career in 2009 as a 3D Artist/Graphic Designer and changed career
            direction to UI UX Design in 2015. Provided design solutions for different
            types of projects and successfully delivered Web & Mobile Applications, Corporate
            Websites, and Brand Identity.
          </div>
          <button
            style={{
              padding: '12px 20px',
              borderRadius: '6px',
              background: '#fff',
              border: '1px solid #7B2095',
              boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
              color: '#7B2095',
              fontSize: '14px',
              fontWeight: 'bolder'
            }}
          >
            View My Portfolio
          </button>
        </div>
        <div><img src='../src/Images/Picture2.png' alt='profile-img' style={{ height: '555px' }} /></div>
      </div>
      <div id='experience'
        style={{
          padding: '25px',
          marginBottom:'50px'
        }}
      >
        <Experience />
      </div>
      <div id='project'
        style={{
        }}
      >
        <Project />
      </div >
      <div id='case-studies'
        style={{
          height: '100vh'
        }}
      >
        <CaseStudies />
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
