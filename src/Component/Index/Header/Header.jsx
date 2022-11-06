import React, { useEffect } from 'react'
import './Header.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])

  return (
    <div className="landing">
      <div className="container">
        <div className="row-lan">
          <div data-aos="fade-up" className="content">
            <h2>Minimal Style Collection — 2021</h2>
            <p className="line"></p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
