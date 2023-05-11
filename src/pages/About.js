import React from 'react'
import Ourclients from '../Component/Aboutus/Ourclients/Ourclients'
import Weare from '../Component/Aboutus/Weare/Weare.jsx'
import Ourtesams from '../Component/Aboutus/Ourteams/Ourtesams'
import Header from '../Component/Aboutus/Header/Header'
import Getstarted from '../Component/Index/Getstarted/Getstarted'
import Testimonials from '../Component/Aboutus/Testimonials/Testimonials'

const About = () => {
  return (
    <>
      <Header />
      <Ourclients />
      <Weare />
      <Ourtesams />
      <Testimonials/>
      <Getstarted />
    </>
  )
}

export default About
