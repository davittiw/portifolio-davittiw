import React from 'react'
import Education from './Education'

const EducationSec = () => {
  return (
    <section
      id="education"
      className="min-h-screen w-full classe-livre"
    >
      <div className="classe-livre flex-col gap-5">
        <div className="info-education classe-livre flex-col">
          <h1 className="text-white text-4xl md:text-5xl xl:text-4xl font-bold">
            Minha formação
          </h1>
          <p className="text-gray-300 text-sm md:text-xl lg:text-xl xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            pariatur?
          </p>
        </div>

        <Education />
      </div>
    </section>
  );
}

export default EducationSec