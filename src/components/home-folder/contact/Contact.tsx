import React from 'react'
import ContactSocial from "./ContactSocial"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen w-full classe-livre'>
      <div className="w-full md:w-[50%] md:h-100 gap-10 classe-livre flex-col md:flex-row">
        <ContactForm/>
        <ContactSocial/>
      </div>
    </section>
  )
}

export default Contact