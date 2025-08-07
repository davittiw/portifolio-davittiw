import React from 'react'
import Sobre from "../components/sobre-folder/about/Sobre"
import EducationSec from '../components/sobre-folder/education/EducationSec';
import Phase from "../components/ui/phase"

const AboutPage = () => {
  return (
    <main id="about">
      <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center">
        <Sobre/>
        <Phase/>
        <EducationSec/>
      </div>
    </main>
  );
}

export default AboutPage