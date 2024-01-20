import React from 'react';
import './App.css';
import Navbar from "./components/template/navbar/Navbar";
import Home from "./components/template/home/Home";
import About from "./components/template/about/About";
import LineComponent from "./components/molecules/Line/LineComponent";
import Project from "./components/template/project/Project";
import Contact from "./components/template/contact/Contact";

function App() {
  return (
      <div className={"lg:bg-gray-700 bg-gray-300"}>
         <Navbar/>
          <div className={"container lg:max-w-[1000px] lg:bg-gray-300 mx-auto px-8 md:px-10"}>
              <div id={'home'}>bang</div>
          <Home/>
              <LineComponent/>
          <About/>
              <LineComponent/>
              <Project/>
              <LineComponent/>
              <Contact/>
          </div>
      </div>
  );
}

export default App;
