import React, { useRef } from "react";
import { gsap } from "gsap"; // Import GSAP library
import logo from "./logo.svg";
import "./App.css";

function App() {
  const boxRef = useRef(null);

  const runGsap = () => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      repeatDelay: 2,
      ease: "bounce.out",
    });
  };

  const handleButtonPress = () => {
    runGsap();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="box" ref={boxRef} onClick={handleButtonPress}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
