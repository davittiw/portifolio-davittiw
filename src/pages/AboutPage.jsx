import React from 'react'
import Sobre from "../components/sobre-folder/about/Sobre"
import EducationSec from '../components/sobre-folder/education/EducationSec';
import Phase from "../components/ui/phase"
import Accordion from '../components/ui/Accor';


const AboutPage = () => {
  return (
    <main id="about" className="radial">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Sobre/>
        <Phase/>
        <EducationSec/>
        {/* <Accordion/> */}
      </div>
    </main>
  );
}

export default AboutPage