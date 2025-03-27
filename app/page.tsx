import React from "react";
import Image from "next/image";
import "./globals.css";

const App = () => {

  return (
    
    <div className="bg-[url(/bg.jpg)] height={100%}">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="logo-blue"
          src="/logo-blue.png"
          alt="innovphil-logo"
          width={180}
          height={38}
          priority
        />
      </div>

      <div className="app-container">
        <div className="boxes-container">

          <a
            className="box" 
            href="https://forms.office.com/r/wnwKx2Kges"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <p className="text-2xl ...">IELTS</p>
          </a>

          <a
            className="box" 
            href="https://forms.office.com/r/qs7UbLqZfF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl ...">AHA Training</p>
          </a>

          <a
            className="box"
            href="https://forms.office.com/r/aMbFY9Aqi8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl ...">Inquiries</p>
          </a>

          <a
            className="box"
            href="https://forms.office.com/r/BLm5BtqfHc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl ...">Staff Daily Log</p>
           
          </a>

        </div>
        
        <div className="login">
        <iframe width="450px" height="480px" src="https://forms.office.com/r/ec28UjDzvf?embed=true" frameBorder="0"> </iframe>
        </div>

      </div>
          
    </div> 

 

  );
};

export default App;
