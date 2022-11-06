import React from 'react'
import './Video.css'
import imgv7min from '../Data/imgv7min.jpg'
import { BsFillPlayFill } from 'react-icons/bs'

const Video = () => {
  return (
    <div className="section-video">
      <div className="container">
        <div className="row-video">
          <div className="head-video">
            <h2>04. Video</h2>
            <BsFillPlayFill />
          </div>
          <div className="all-video">
            <div className="video">
              {/* <a href="images/img_v_7-min.jpg"> */}
              <img src={imgv7min} alt="" />
              <span className="icon">
                <BsFillPlayFill />
              </span>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
