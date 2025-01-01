import React, { useState, useEffect, useCallback } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Homme from './Component/Homme';
import Contact from './Component/Contactus';
import Specialiter from './Component/Specialiter';
import AboutUs from './Component/AboutUs';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div
      className={`container mx-auto p-4 flex flex-col ${
        width < 768 ? 'md:flex-col' : 'lg:flex-row'
      }`}
    >
      <Header />
      <main className="flex-grow">
        <Homme />
        <br className="lg:hidden" />
        <Specialiter />
        <br className="lg:hidden" />
        <br className="lg:hidden" />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
