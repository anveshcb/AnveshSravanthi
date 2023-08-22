function Services() {
  const marriageLocation = () => {
    window.open('https://maps.app.goo.gl/QtK5CoSM8rTpPCDT7');
  };
  return (
    <div className="container services">
      <br/><br/><br/><br/>
        <h2 className="main-title text-center"><i>Marriage Invitation</i></h2>
        <button class="custom-button" onClick={marriageLocation}>Marriage Location</button><br/> <br/>
        <img alt="marriage" src="img/Marriage.jpg" className="marriage-logo" />
    </div>
  );
}
export default Services;
