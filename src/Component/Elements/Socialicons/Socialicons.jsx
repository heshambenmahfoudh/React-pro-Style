import React from 'react'
import './Socialicons.css'
import { socialicons } from '../Data/dunmmy'

const Socialicons = () => {
  return (
    <div className="section-icon">
      <div className="container">
        <div className="rwo-icon">
          <div className="all-icon">
            <div className="head-icon">
              <h2>06. Social Icons</h2>
            </div>
            <div className="icon">
              <ul>
                {socialicons.map((item) => (
                  <li key={item.id}>
                    <a href="#">{item.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socialicons
