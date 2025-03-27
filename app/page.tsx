import React from "react";
import Image from "next/image";
import "./globals.css";

const App = () => {

  return (
    <div className="bg-[url(/Frame1.jpg)] bg-cover">
      

      <div className="app-container">
        <div className="boxes-container">

          <a
            className="box" 
            href="https://forms.office.com/r/wnwKx2Kges"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <p className="text-xl ...">IELTS</p>
          </a>

          <a
            className="box" 
            href="https://forms.office.com/r/qs7UbLqZfF"
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
            href="https://forms.office.com/r/BLm5BtqfHc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl ...">Staff Daily Log</p>
           
          </a>
        </div>
        
        <div className="login">
        <iframe width="450px" height="480px" src="https://forms.office.com/r/ec28UjDzvf?embed=true" frameBorder="0"> </iframe>
        </div>

      </div>
      <div className="containerbot">
        
      </div>
          
    </div> 

 

  );
};

export default App;
