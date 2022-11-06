import React from 'react'
import './Weare.css'
import imgv5min from '../../../assets/imgv5min.jpg'

const Weare = () => {
  return (
    <div className="section-5-1">
      <div className="container">
        <div className="row-5-1">
          <div className="imges-1">
            <img src={imgv5min} />
          </div>
          <div className="tit-1">
            <h2>Who We Are</h2>
            <div className="line-1"></div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weare
