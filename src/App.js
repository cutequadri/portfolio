import React from 'react';
import Navbar from './component/navbar';
import Main from './component/main';
import Work from './component/work';
import Project from './component/project';
import Contact from './component/contact';
import Resume from './component/resume';
function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Work/>
      <Project/>
      <Resume/>
      <Contact/>
      
    </div>
  );
}

export default App;
