function About() {
  const receptionLocation = () => {
    window.open('https://goo.gl/maps/pWy8ZJnShSY2psG69');
  };
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about borderradius backgroundreceptionimage">
          <h2 className="main-title text-center">Reception Invitation</h2>
          <button class="custom-button" onClick={receptionLocation}>Click here for Reception Location</button><br/> <br/>
          <i className="center"> on September 4th 2023 from 07:00 PM </i>
          <br/><br/>
          <img alt="reception" src="img/Reception.jpeg" className="reception-logo" />
      </div>
    </>
  );
}
export default About;
