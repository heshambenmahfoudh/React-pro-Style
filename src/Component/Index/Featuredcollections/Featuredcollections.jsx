import React, { useRef } from 'react'
import './Featuredcollections.css'
import { featuredcollections } from '../Data/dunmmy'

const Featuredcollections = () => {
  const scrollRef = useRef()

  const scroll = (dir) => {
    const sc_Ref = scrollRef.current

    dir === 'left'
      ? (sc_Ref.scrollLeft += (sc_Ref.clientWidth + 9) / 4)
      : (sc_Ref.scrollLeft -= (sc_Ref.clientWidth + 9) / 4)
  }
  return (
    <div className="section-img">
      <div className="container">
        <div className="rows">
          <div className="all-product">
            <div className="content">
              <div className="text">
                <h1>Featured Collections</h1>
              </div>
              <div className="click">
                <span className="cl" onClick={() => scroll('right')}>
                  Prev
                </span>
                {'  '}/{'  '}
                <span className="cl" onClick={() => scroll('left')}>
                  Next
                </span>
              </div>
            </div>
            <div className="product" ref={scrollRef}>
              {featuredcollections.map(({ image, h3, p }, i) => (
                <div className="box" key={i}>
                  <div className="imges">
                    <img src={image} alt="ff" />
                  </div>
                  <div className="text">
                    <h3>{h3}</h3>
                    <p>{p}</p>
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

export default Featuredcollections
