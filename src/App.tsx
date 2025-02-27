import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About'; 
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import References from './components/References';


function App() {

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  // this is used to detect the screen size and show / hide the sidebar

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



    document.title = "portfolio";
  return (
    <div className="container">

    
      <nav className="sidebar">
        <div className="sidebar-text">
            <p>PORTFOLIO</p>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#references">References</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* as hamburger for mobile */}
      {isMobile && (
        <button onClick={toggleSidebar} className='hamburger-menu'>
          &=9776;
        </button>
      )}

      {/* main content */}

      <main className="content">
        <Home />
        <About />
        <Education />
        <Projects />
        <References />
        <Contact />


      </main>
      </div>
  );
}

export default App;
