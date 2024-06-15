import React from "react";

import Contact from "./components/contact/Contact";



import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        
        <Projects />
        <Resume />
        <Contact />
       
      </div>
    </div>
  );
}

export default App;
