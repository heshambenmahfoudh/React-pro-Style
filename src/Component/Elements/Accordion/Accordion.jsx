import React, { useState } from 'react'
import './Accordion.css'
import { accordion } from '../Data/dunmmy'
import { BsFolderPlus, BsFolderMinus } from 'react-icons/bs'

const Accordion = () => {
  const [selected, setSlected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSlected(null)
    }
    setSlected(i)
  }
  return (
    <div className="accordiom-2">
      <div className="container">
        <div className="row-acc-2">
          <div className="acc-head">
            <h2>02. Accordion</h2>
          </div>
          <div className="accor">
            {accordion.map((item, i) => (
              <div key={i}>
                <div className="acc" onClick={() => toggle(i)}>
                  <span>
                    {selected === i ? <BsFolderMinus /> : <BsFolderPlus />}
                  </span>
                  <h1>{item.h1}</h1>
                </div>
                <div className={selected === i ? 'desc show' : 'desc'}>
                  <p>{item.pone}</p>
                  <p>{item.ptwo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
