import React from 'react'
import { Banner } from './Banner.js'
import { About } from './About.js'
import { ContactUs } from './Contact.js'
import { Projects } from './Projects.js'

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Projects />
      <ContactUs />
    </main>
  )
}

export default Home