import React from 'react'
import Emailsvg from '../Emailsvg/Emailsvg'
import './Emailinput.css'

const Emailinput = () => {
  return (
    <div className="section-contact">
      <div className="container">
        <div className="row-con">
          <Emailsvg />
          <div className="serves-emils">
            <div className="serv-em-1">
              <label htmlFor="">First name</label>
              <input className="input-serv-em" type="text" />
            </div>
            <div className="serv-em-1">
              <label htmlFor="">Last name</label>
              <input className="input-serv-em" type="text" />
            </div>
            <div className="serv-em-2">
              <label htmlFor="">Email address</label>
              <input className="input-serv-em" type="text" />
            </div>
            <div className="serv-em-2 ">
              <label htmlFor="">Message</label>
              <textarea
                className="input-serv-em"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="btn">
                <button> Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emailinput
