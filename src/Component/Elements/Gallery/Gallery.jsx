import React from 'react'
import './Gallery.css'
import { gallery } from '../Data/dunmmy'

const Gallery = () => {
  return (
    <div className="section-gallery">
      <div className="container">
        <div className="row-gal">
          <div className="head-gal">
            <h2>03. Gallery</h2>
          </div>

          <div className="all-gallery">
            {gallery.map((item) => (
              <div className="gallery" key={item.id}>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
