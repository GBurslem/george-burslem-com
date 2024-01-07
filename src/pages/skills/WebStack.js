import React from 'react';
import Header from '../../components/Header';
import ContactPanel from '../../components/ContactPanel';
import Footer from '../../components/Footer';
import ServicesPanel from '../../components/ServicesPanel';

/**
 * Web stack skills page listing all my available services.
 *
 * @return {JSX.Element} - Returns the rendered web stack skills page.
 */
function WebStack() {
  return (
    <div>
      <Header />
      <div className='services-panels'>
        <ServicesPanel title={'Ecommerce Website'} text={'I can do this 2'} />
        <ServicesPanel title={'Portfolio Website'} text={'I can do this 2'} />
        <ServicesPanel title={'Wordpress'} text={'I can do this 3'} />
        <ServicesPanel title={'Squarespace'} text={'I can do this 4'} />
        <ServicesPanel title={'Website Maintenance'} text={'I can do this'} />
        <ServicesPanel title={'Unity Development'} text={'I can do this 2'} />
      </div>
      <ContactPanel bgColor={'secondary-bg'} />
      <Footer />
    </div>
  );
}

export default WebStack;
