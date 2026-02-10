import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Computer Science Student",
      "Aspiring Software Engineer",
      "Building Cool Stuff"
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <section id="home"
  style={{
    width: '100vw',          
    height: '100vh',        
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
    color: 'white',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    font: 'nunito sans',
  }}
>
      <h1>Hi, I'm Aasif</h1>

      <h2>
        {text}
        <Cursor />
      </h2>
    </section>
  );
}

export default Hero;
