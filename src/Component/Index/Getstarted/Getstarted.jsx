import React from 'react'
import './Getstarted.css'
import { getstarted } from '../Data/dunmmy'

const Getstarted = () => {
  return (
    <div className="lets">
      <div className="container">
        <div className="row-lets">
          {getstarted.map((item) => (
            <div className="content" key={item.id}>
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
              <div className="btn-2">
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Getstarted
