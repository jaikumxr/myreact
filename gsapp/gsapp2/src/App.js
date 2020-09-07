import React,{useRef, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {TweenMax, Power3} from 'gsap';
import { Tween } from 'gsap/gsap-core';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, .8, {width:200, height:200, ease:Power3.easeOut})
    setState(true);
  }
  const handleShrink = () => {
    TweenMax.to(circleRed, .8, {width:75, height:75, ease:Power3.easeOut})
    setState(false);
  }

  useEffect(()=> {
    TweenMax.to(app, 0, {css:{visibility: "visible"}})
    // TweenMax.from(circle, .8, {opacity:0,x:40, ease: Power3.easeOut})
    // TweenMax.from(circleRed, .8, {opacity:0,x:40, ease: Power3.easeOut,delay: 0.2})
    // TweenMax.from(circleBlue, .8, {opacity:0,x:40, ease: Power3.easeOut, delay: 0.3})
    TweenMax.staggerFrom([circle,circleRed,circleBlue], 0.8, {opacity:0,x:40, ease: Power3.easeOut}, 0.2)
  },[])

  return (
    <div 
      className="App"
      ref={el => app = el}>
      <header className="App-header">
        <div className="circle-container">
          <div 
            className="circle"
            ref={el => {circle = el}}></div>
          <div 
            onClick={(state)? handleShrink: handleExpand}
            className="circle red"
            ref={el => {circleRed = el}}></div>
          <div 
          className="circle blue"
          ref={el => {circleBlue = el}}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
