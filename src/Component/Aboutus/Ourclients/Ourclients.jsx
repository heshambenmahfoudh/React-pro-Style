import React from 'react'
import './Ourclients.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { ourclients } from '../Data/dunmmy'

const Ourclients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row-cli">
          <div className="head-cli">
            <h2>Our Clients</h2>
            <p className="line"></p>
          </div>
          <div className="all-img-cli">
            <Splide
              options={{
                perPage: 5,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '10px',
              }}
            >
              {ourclients.map((item, index) => (
                <SplideSlide className="img-cli" key={index}>
                  <img src={item.logo} alt="" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourclients
