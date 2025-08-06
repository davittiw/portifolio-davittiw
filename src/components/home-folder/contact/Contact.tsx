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
    </section>
  );
}

export default Contact