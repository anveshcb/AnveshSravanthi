function Services() {
  const marriageLocation = () => {
    window.open('https://maps.app.goo.gl/QtK5CoSM8rTpPCDT7');
  };
  const liveStreaming = () => {
    alert('Will update you soon.....!!!!!');
    //window.open('https://maps.app.goo.gl/QtK5CoSM8rTpPCDT7');
  };
  return (
    <div className="container services borderradius backgroundmarriageimage">
      <br/><br/><br/><br/>
        <h2 className="main-title text-center"><i>Marriage Invitation</i></h2>
        <button class="custom-button" onClick={marriageLocation}>Marriage Location</button><br/> <br/>
        <button class="custom-button-2" onClick={liveStreaming}>Live Streaming</button><br/> <br/>
        <i className="center"> on September 3rd 2023 @ 10:39 AM </i>
        <br/><br/>
        <img alt="marriage" src="img/Marriage.jpg" className="marriage-logo" />
    </div>
  );
}
export default Services;
