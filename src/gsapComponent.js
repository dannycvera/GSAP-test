/* eslint-disable */

///
// Not needed currently
// Everything is in the App.js component
///
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP library
import logo from "./logo.svg";

function GsapComponent({ rotate }) {
  const boxRef = useRef(null); // Create a ref to target the element
  const [repeatVal, setRepeatVal] = useState(rotate);
  useEffect(() => {
    // Animate the element when the component mounts
    if (rotate) {
      setRepeatVal(-1);
    } else {
      setRepeatVal(0);
    }
    console.log(repeatVal, rotate);
    runGsap();
  }, [rotate]);
  const runGsap = () => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      repeat: repeatVal,
      repeatDelay: 2,
      ease: "bounce.out",
    });
  };
  return (
    <div className="App">
      <div className="box" ref={boxRef}>
        <img src={logo} className="App-logo" alt="logo" />
        {/* Your content here */}
        hello this is from GSAP
        <p>Animated Box</p>
      </div>
    </div>
  );
}

export default GsapComponent;
