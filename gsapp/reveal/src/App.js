import React,{useRef, useEffect} from 'react';
import './App.scss';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import {TimelineLite, Power2} from 'gsap';
import Sample from "./images/sample.jpg"
function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".image-container:after");

  let tl = new TimelineLite();
  useEffect(()=> {
    tl.to(container, 
      0.3, 
      {css: {visibility: "visible"}}
    ).to(imageReveal, 
      1, 
      {width: "0%", ease: Power2.easeInOut}
    ).from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.1})
  })
return (
    <section className="main">
      <div
        ref={el => container = el} 
        className="container">
        <>
          <div className="image-container">
            <img 
            ref={el => image = el}
            src={Sample} />
          </div>
        </>
      </div>
    </section>
);
}

export default App;