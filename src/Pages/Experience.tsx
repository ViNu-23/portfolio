import Menu from "./Menu";

export default function Experience() {
  const experiences = [
    {
      company: 'Yikes Technologies',
      position: 'Lead UI/UX Designer',
      duration: '2021 - Present',
    },
    {
      company: 'Salesken',
      position: 'Lead UI/UX Designer',
      duration: '2018 - 2021',
    },
    {
      company: 'Mildly Classic Technologies Pvt. Ltd.',
      position: 'UI/UX Designer',
      duration: '2017 - 2018',
      awards: ['Applause Award'],
    },
    {
      company: 'Triad Square InfoSec',
      position: 'UI/UX Designer',
      duration: '2015 - 2017',
      awards: ['Best Support Award', 'Excellence Award'],
    },
    {
      company: 'IdeaFlask',
      position: 'UI Designer',
      duration: '2015',
    },
    {
      company: '3i Global Pvt. Ltd.',
      position: '3D Artist/Graphic Designer',
      duration: '2009 - 2014',
    },
  ];

  return (
  <>
    <div style={{ position: 'relative',padding:'25px'}}>
    <h2 className="title">Experience</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {experiences.map((experience, index) => (
        <div key={index} style={{ flex: '0 0 48%', marginBottom: '40px', position: 'relative' }}>
          <strong style={{ color: '#5a39a4',fontSize:'20px' }}>{experience.company}</strong>
          <br />
          {experience.position}
          <br />
          {experience.duration}
          {experience.awards && (
            <div>
              Awards: {experience.awards.map((award, i) => <span key={i}>{award} </span>)}
            </div>
          )}
        </div>
      ))}
    </div>

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
