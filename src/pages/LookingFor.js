import React from 'react';
import Header from '../components/Header';
import ContactPanel from '../components/ContactPanel';
import Footer from '../components/Footer';
import Temp from '../components/Temp';

/**
 * Looking for page listing the type of work I'm looking for.
 *
 * @return {JSX.Element} - Returns the rendered looking for page.
 */
function LookingFor() {
  return (
    <div>
      <Header />
      <Temp />
      <ContactPanel bgColor={'secondary-bg'} />
      <Footer />
    </div>
  );
}

export default LookingFor;
