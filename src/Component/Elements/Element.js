import React from 'react'
import Getstarted from '../Index/Getstarted/Getstarted'
import Accordion from './Accordion/Accordion'
import Gallery from './Gallery/Gallery'
import Video from './Video/Video'
import Form from './Form/Form'
import Socialicons from './Socialicons/Socialicons'
import Testimonials from './Testimonials/Testimonials'
import Checklist from './Checklist/Checklist'
import Sectionoverlay from './Sectionoverlay/Sectionoverlay'
import Slider from './Slider/Slider'
import Header from './Header/Header'

const Element = () => {
  return (
    <>
      <Header />
      <Slider />
      <Accordion />
      <Gallery />
      <Video />
      <Form />
      <Socialicons />
      <Testimonials />
      <Checklist />
      <Sectionoverlay />
      <Getstarted />
    </>
  )
}

export default Element
