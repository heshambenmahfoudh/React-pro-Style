import React from 'react'
import './Checklist.css'
import { checklist } from '../Data/dunmmy'

const Checklist = () => {
  return (
    <div className="section-chisk">
      <div className="container">
        <div className="row-te">
          <div className="head-te">
            <h2>08. Check List</h2>
          </div>
          <div className="all-chisk">
            <div className="chisk">
              {checklist.map((item) => (
                <p key={item.id}>
                  <span>{item.icon}</span>
                  {item.p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checklist
