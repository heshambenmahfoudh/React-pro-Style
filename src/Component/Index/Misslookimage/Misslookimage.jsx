import React from 'react'
import './Misslookimage.css'
import { misslookimage } from '../Data/dunmmy'

const Misslookimage = () => {
  return (
    <div className="section-5">
      <div className="container">
        {misslookimage.map((item) => (
          <div className="row" key={item.id}>
            <div className="imges">
              <img src={item.image} alt="" />
            </div>
            {item.title.map((item) => (
              <div className="tit" key={item.id}>
                <h2>{item.h2}</h2>
                <div className="line"></div>
                <p> {item.p1}</p>
                <p>{item.p2}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Misslookimage
