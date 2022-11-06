import React from 'react'
import './Sneakers.css'
import { sneakers } from '../Data/dunmmy'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sneakers = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {sneakers.map((item) => (
            <div key={item.id} className="box1" data-aos="fade-up">
              <img src={item.image} alt="" />
              <div className="content">
                <h1> {item.h1}</h1>
                <p> {item.p} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sneakers
