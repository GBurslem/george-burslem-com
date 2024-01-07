import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import LookingFor from './pages/LookingFor';
import Contact from './pages/Contact';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import Experience from './pages/Experience';
import WebDevelopment from './pages/experience/WebDevelopment';
import BestPractices from './pages/experience/BestPractices';
import CloudDevelopment from './pages/experience/CloudDevelopment';
import Databases from './pages/experience/Databases';
import CSharp from './pages/experience/CSharp';

/**
 * The main app container settings up the routes for the app. Loads the root page first.
 *
 * @return {JSX.Element} Renders the main app container.
 */
function App() {
  return (
    <div className='app-container'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="experience/web-development" element={<WebDevelopment />} />
        <Route path="experience/csharp" element={<CSharp />} />
        <Route path="experience/cloud" element={<CloudDevelopment />} />
        <Route path="experience/best-practices" element={<BestPractices />} />
        <Route path="experience/databases" element={<Databases />} />
        <Route path="looking-for" element={<LookingFor />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
