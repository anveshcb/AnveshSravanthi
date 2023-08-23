import { useEffect } from "react";
import anime from 'animejs';

function Header() {
  useEffect(() => {
    anime.timeline({loop: true})
    .add({
      targets: '.ml5 .line',
      opacity: [0.5,1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700
    }).add({
      targets: '.ml5 .line',
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
    }).add({
      targets: '.ml5 .ampersand',
      opacity: [0,1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.ml5 .letters-left',
      opacity: [0,1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.ml5 .letters-right',
      opacity: [0,1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }, []); 
  return (
    <header className="borderradius">
      {/* <img alt="ganesh" src="img/ganesh.png" className="ganesh-logo" />
      Welcome to my wedding..!!!
      <img alt="ganesh" src="img/ganesh.png" className="ganesh-logo" /> */}
    
    {/* <br/><br/>
    <i>Your presence on our wedding day will make it even more special and memorable for us.</i>  */}

    {/* <br/><br/><br/>
    <i>Marriage on September 3rd 2023 @11:15AM </i>
    <br/><br/>
    <i>Reception on September 4th 2023 from 6PM </i> */}
    <h3><img alt="ganesh" src="img/ganesh.png" className="ganesh-logo" />Welcome to our Wedding<img alt="ganesh" src="img/ganesh.png" className="ganesh-logo" /></h3>
      <h1 className="ml5">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters letters-left">Anvesh&nbsp;</span>
          <span className="letters ampersand">&amp;</span>
          <span className="letters letters-right">Sravanthi</span>
          <span className="line line2"></span>
        </span>
      </h1>
      <h2>Your presence on our wedding day will make it even more special and memorable for us.</h2>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
