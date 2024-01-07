import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import WebStack from './pages/skills/WebStack';
import LookingFor from './pages/LookingFor';
import Contact from './pages/Contact';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';

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
        <Route path="about" element={<About />} />
        <Route path="skills/web-stack" element={<WebStack />} />
        <Route path="looking-for" element={<LookingFor />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
