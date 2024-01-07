import React from 'react';
import Header from '../components/Header';
import LandingPanel from '../components/LandingPanel';
import MyTechStackPanel from '../components/MyTechStackPanel';
import AboutPanel from '../components/AboutPanel';
import ContactPanel from '../components/ContactPanel';
import Footer from '../components/Footer';

/**
 * Home page.
 *
 * @return {void}
 */
function Home() {
  return (
    <div>
      <Header />
      <LandingPanel />
      <MyTechStackPanel bgColor={'secondary-bg'} />
      <AboutPanel bgColor={'main-bg'} />
      <ContactPanel bgColor={'secondary-bg'} />
      <Footer />
    </div>
  );
}

export default Home;
