import React from 'react'
import './Minimaldesigntwo.css'
import { minimaldesigntwo } from '../Data/dunmmy'

const Minimaldesigntwo = () => {
  return (
    <div className="section-icons">
      <div className="container">
        <div className="row-icn">
          <div className="all-icon">
            {minimaldesigntwo.map((item) => (
              <div className="icon" key={item.id}>
                <i>{item.icon}</i>
                <h2>{item.h2}</h2>
                <p>{item.p}</p>
                <a href="#">{item.a}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Minimaldesigntwo
