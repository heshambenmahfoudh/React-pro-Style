import React from 'react'
import './Newseason.css'
import { newseason } from '../Data/dunmmy'

const Newseason = () => {
  return (
    <div className="section-4">
      <div className="container">
        {newseason.map((item) => (
          <div className="row-1" key={item.id}>
            <div className="heading">
              <div className="he-d">
                <h2>{item.h2}</h2>
                <div className="line"></div>
              </div>
              <div className="he-d"> </div>
            </div>
            <div className="all-p-g">
              {item.line.map((items) => (
                <div className="p-g" key={items.id}>
                  <p>{items.p1}</p>
                  <p>{items.p2}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Newseason
