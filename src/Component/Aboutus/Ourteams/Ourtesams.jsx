import React, { useRef } from 'react'
import './Ourtesams.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs'
import { ourtesams } from '../Data/dunmmy'

const Ourtesams = () => {
  const scrollRef = useRef(null)
  const scroll = (directoin) => {
    directoin === 'left'
      ? (scrollRef.current.scrollLeft += scrollRef.current.clientWidth / 3)
      : (scrollRef.current.scrollLeft -= scrollRef.current.clientWidth / 3)
  }

  return (
    <div className="si-section">
      <div className="container">
        <div className="row-si">
          <div className="content-si">
            <div className="head">
              <h2>Our Awesome Team</h2>
              <p className="line"></p>
            </div>
            <div className="span-si">
              <span onClick={() => scroll('right')}>
                <BsArrowLeftShort />
              </span>{' '}
              <span onClick={() => scroll('left')}>
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="ls">
            <div className="si-img" ref={scrollRef}>
              {ourtesams.map(({ image, h2, span, p, a, icon }, index) => (
                <div className="img-content" key={index}>
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="title">
                    <h2>{h2}</h2>
                    <span>{span}</span>
                    <p> {p}</p>
                    <span className="links">
                      <a href="#"> {a}</a>
                      <a href="#">
                        <i>{icon}</i>
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourtesams
