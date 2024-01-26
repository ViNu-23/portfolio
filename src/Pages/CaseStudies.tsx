import Menu from './Menu';

export default function CaseStudies() {
  const caseStudy = {
    width: '100%',
  };

  const projectPaths = [
    "/Images/Picture9.jpg",
    "/Images/Picture10.png",
    "/Images/Picture11.jpg",
    "/Images/Picture12.png",
    "/Images/Picture13.png",
    "/Images/Picture14.png",
    "/Images/Picture15.png",
    "/Images/Picture16.png",
    "/Images/Picture17.png",
    "/Images/Picture18.png",
    "/Images/Picture19.png",
    "/Images/Picture20.png",
    "/Images/Picture21.png",
    "/Images/Picture24.png",
    "/Images/Picture25.png",
  ];

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <h2 className='title' style={{ margin: '25px 0px 20px 25px' }}>
          Case Studies
        </h2>
        {projectPaths.map((path, index) => (
          <div key={index}>
            <img
              style={caseStudy}
              src={path}
              alt={`project-${index + 1}`}
              className='project-img'
              loading="lazy"
            />
          </div>
        ))}
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
