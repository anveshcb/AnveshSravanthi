function About() {
  const receptionLocation = () => {
    window.open('https://goo.gl/maps/pWy8ZJnShSY2psG69');
  };
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
          <h2 className="main-title text-center">Reception Invitation</h2>
          <button class="custom-button" onClick={receptionLocation}>Reception Location</button><br/> <br/>
          <img alt="reception" src="img/Reception.jpeg" className="reception-logo" />
      </div>
    </>
  );
}
export default About;
