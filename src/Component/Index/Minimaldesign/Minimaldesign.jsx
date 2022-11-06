import React from 'react'
import './Minimaldesign.css'
import imgv1min from '../Data/imgv1min.jpg'
import imgv2min from '../Data/imgv2min.jpg'
import { useState } from 'react'

const Minimaldesign = () => {
  const [state, setState] = useState(false)

  const changevalue = () => {
    const scroll = document.documentElement.scrollTop
    if (scroll > 120) {
      setState(true)
    } else if (scroll < 120) {
      setState(false)
    }
  }
  window.addEventListener('scroll', changevalue)
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className={state ? 'box-1 active' : 'box-1 '}>
            <div className="head1">
              <h2>Minimal Design</h2>
              <span>Minimal Design</span>
            </div>
            <div className="img-1">
              <img src={imgv2min} alt="ddd" />
            </div>
            <div className="par">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="box-2">
            <div className="head2">
              <h2>Minimal Watch</h2>
              <span>Innovative Design</span>
              <div className="lines"></div>
            </div>
            <div className="par">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="img-2">
              <img src={imgv1min} alt="ddddd" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Minimaldesign
