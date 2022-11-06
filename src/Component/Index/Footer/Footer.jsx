import React from 'react'
import './Footer.css'
import { footer } from '../Data/dunmmy'
import Copyright from '../Copyright/Copyright'

import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { BsGoogle, BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="colum">
            <div className="head">
              <h2>About</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.
              </p>
            </div>
            <div className="weight">
              <h3>Connect with us</h3>
              <ul>
                <li>
                  {' '}
                  <a href="#">
                    {' '}
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="#">
                    {' '}
                    <i>
                      <BsTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="#">
                    {' '}
                    <i></i>
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="#">
                    {' '}
                    <i>
                      <BsGoogle />
                    </i>
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="#">
                    {' '}
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="colum">
            <div className="head">
              <h2>Navigations</h2>
            </div>
            <div className="links">
              {footer.map((item) => (
                <ul key={item.id}>
                  <li>
                    {' '}
                    <a href="#"> {item.li1}</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#"> {item.li2}</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">{item.li3} </a>
                  </li>
                  <li>
                    {' '}
                    <a href="#"> {item.li4}</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">{item.li5}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
