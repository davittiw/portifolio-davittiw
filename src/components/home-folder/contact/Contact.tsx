import React from 'react'
import ContactSocial from "./ContactSocial"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full classe-livre">
      <div className="w-full md:w-[70%] lg:w-[80%] xl:w-[70%] z-5 md:h-100 gap-10 classe-livre flex-col xl:flex-row">
        <ContactForm />
        <ContactSocial />
      </div>

      <span className="bg-blue-900 blur-3xl rounded-full absolute top-900 left-330 w-200 h-200 -z-10 filter opacity-7"></span>
      <span className="bg-blue-900 blur-3xl rounded-full absolute top-950 left-30 w-200 h-200 -z-10 filter opacity-7"></span>
    </section>
  );
}

export default Contact