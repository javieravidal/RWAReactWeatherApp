import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        </div>
        <footer className="footer">
          This project was coded by{" "}
          <a
            href="https://www.javieravidal.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javiera Vidal
          </a> 
          and is&#32; 
          <a
            href="https://github.com/javieravidal/ReactWeatherApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub 
          </a> &#32;and 
          <a
            href="https://cheery-shortbread-8440df.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      
    </div>
  );
}