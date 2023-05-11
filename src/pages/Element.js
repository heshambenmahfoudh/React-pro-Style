import React from 'react'
import Header from '../Component/Elements/Header/Header'
import Slider from "../Component/Elements/Slider/Slider"
import Accordion from "../Component/Elements/Accordion/Accordion"
import Gallery from "../Component/Elements/Gallery/Gallery"
import Video from "../Component/Elements/Video/Video"
import Form from "../Component/Elements/Form/Form"
import Socialicons from "../Component/Elements/Socialicons/Socialicons"
import Testimonials from "../Component/Elements/Testimonials/Testimonials"
import Checklist from "../Component/Elements/Checklist/Checklist"
import Sectionoverlay from "../Component/Elements/Sectionoverlay/Sectionoverlay"
import Getstarted from "../Component/Index/Getstarted/Getstarted"

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
      <Getstarted/>
    </>
  )
}

export default Element
