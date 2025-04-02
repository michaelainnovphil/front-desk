import React from "react";
import "./globals.css";
import Image from 'next/image'

const App = () => {

  return (
    <div className="bg-container">
      <Image
      src="/Frame1.jpg"
      width={1919}
      height={990}
      alt="background"
    />
      
      <div className="popup-container">
      <Image
      src="/popupbg1.png"
      width={1919}
      height={990}
      alt="popupbackground"
    />
      </div>

      <div>

      </div>

      <div className="introtext">
      <p className="text-3xl text-[#001a70] tracking-wide font-semibold">Welcome to INNOVPHIL</p> 
      </div>

      <div className="bodytext">
      <p className="text-l text-[#303030] tracking-wide text-right"><b>Innovphil</b> is a company dedicated to provide specialized services for health care professionals seeking promising opportunities around the world. Compose of a skilled and service-oriented team, we assure a hassle-free, convenient and reliable way of applying for your international licenses.</p> 
      </div>

      <div className="learnmore">
        <a
            href="https://www.innovphil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <p className="text-xl text-[#0a1f8f] tracking-wide"><u>Learn more here</u></p>
          </a>
      </div>
      

      <div className="app-container">
        <div className="boxes-container">

          <a
            className="box" 
            href="https://forms.office.com/r/Cyairc139C"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <p className="text-xl ...">IELTS</p>
          </a>

          <a
            className="box" 
            href="https://forms.office.com/r/5UEUtj899t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl ...">AHA Training</p>
          </a>

          <a
            className="box"
            href="https://forms.office.com/r/aMbFY9Aqi8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl ...">Inquiries</p>
          </a>

          <a
            className="box"
            href="https://forms.office.com/r/ec28UjDzvf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl ...">Visitors Login</p>
          </a>

          <a
            className="box"
            href="https://forms.office.com/r/BLm5BtqfHc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl ...">Staff Daily Log</p>
          </a>
      </div>
     
      
        </div>
      <div className="containerbot">
      
        
      </div>
      </div>
          


 

  );
};

export default App;