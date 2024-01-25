export default function CaseStudies() {
  const caseStudy={
    width:'100%'
  }
  return (
    <div>
       <h2 className='title' style={{ paddingLeft: '25px' }}>Case Studies</h2>
      <div><img style={caseStudy} src="./src/Images/Picture9.jpg" alt='project' className='project-img' /></div>
      <div><img style={caseStudy}  src="./src/Images/Picture10.png" alt='project' className='project-img' /></div>
      <div><img style={caseStudy} src="./src/Images/Picture11.jpg" alt='project' className='project-img' /></div>
      <div><img style={caseStudy} src="./src/Images/Picture12.png" alt='project' className='project-img' /></div>
      <div><img style={caseStudy} src="./src/Images/Picture13.png" alt='project' className='project-img' /></div>
      <div><img  style={caseStudy}src="./src/Images/Picture14.png" alt='project' className='project-img' /></div>
      <div><img style={caseStudy} src="./src/Images/Picture15.png" alt='project' className='project-img' /></div>
      <div><img style={caseStudy} src="./src/Images/Picture16.png" alt='project' className='project-img' /></div>
    </div>
  )
}
