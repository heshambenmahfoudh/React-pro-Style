import React from 'react'
import './Ourblog.css'
import { ourblog } from '../Data/dunmmy'

const Ourblog = () => {
  return (
    <div className="section-B">
      <div className="container">
        <div className="row-b">
          <div className="all-img">
            {ourblog.map((item) => (
              <div className="blogs" key={item.id}>
                <div className="img">
                  <img src={item.image} />
                  <div className="tit">
                    <h2>{item.h2} </h2>
                    <span>{item.span}</span>
                    <p>{item.p}</p>
                    <a href="j#">{item.a}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="span">
            <ul>
              <li>
                {' '}
                <a href="#">1</a>{' '}
              </li>
              <li className="active">
                {' '}
                <a href="#">2</a>{' '}
              </li>
              <li>
                {' '}
                <a href="#">3</a>{' '}
              </li>
              <li>
                {' '}
                <a href="#">4</a>{' '}
              </li>
              <li>
                {' '}
                <a href="#">5</a>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourblog
