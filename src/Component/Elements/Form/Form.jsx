import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="set-section-contact">
      <div className="container">
        <div className="row-contact">
          <div className="head-cont">
            <h2>05. Form</h2>
          </div>
          <form action="">
            <div className="section-email">
              <div className="serves-emils-2">
                <div className="serv-em-01">
                  <label htmlFor="">First name</label>
                  <input className="input-serv-em1" type="text" />
                </div>
                <div className="serv-em-01">
                  <label htmlFor="">Last name</label>
                  <input className="input-serv-em1" type="text" />
                </div>
                <div className="serv-em-02">
                  <label htmlFor="">Email address</label>
                  <input className="input-serv-em1" type="text" />
                  <span className="serv-em-02-span">
                    We'll never share your email with anyone else.
                  </span>
                </div>
                <div className="serv-em-02">
                  <label htmlFor="">Password</label>
                  <input className="input-serv-em1" type="password" />
                </div>
                <div className="serv-em-02 ">
                  <label htmlFor="">Message</label>
                  <textarea
                    className="input-serv-em1"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="serv-em-02">
                  <label htmlFor="">Select</label>

                  <select className="input-serv-em1" name="" id="">
                    <option value="ww">Untree.co</option>
                    <option value="">Offers high quality free template</option>
                  </select>
                </div>
                <div className=" check-box">
                  <input type="checkbox" />
                  <label htmlFor="">Custom checkbox</label>
                </div>
              </div>
              <div className="btn1 ">
                <button type="submit"> Submite</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
