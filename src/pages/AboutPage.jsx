import React from 'react'
import Sobre from "../components/sobre-folder/about/Sobre"
import EducationSec from '../components/sobre-folder/education/EducationSec';
import Accordion from '../components/ui/Accor';


const AboutPage = () => {
  return (
    <main id="about" className="radial">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Sobre/>
        <EducationSec/>
        {/* <Accordion/> */}
      </div>
    </main>
  );
}

export default AboutPage