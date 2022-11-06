import React from 'react'
import './Posts.css'
import { posts } from '../Data/dunmmy'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])
  return (
    <div className="section-A">
      <div className="container">
        {posts.map((item) => (
          <div className="row-b" key={item.id}>
            <div className="heads">
              <h2>{item.h2}</h2>
              <p className="liness"></p>
            </div>
            <div className="all-img">
              {item.title.map((item) => (
                <div className="blogs" key={item.id} data-aos="fade-up">
                  <div className="img">
                    <img src={item.image} />
                    <div className="tit">
                      <h2>{item.h2}</h2>
                      <span>{item.span}</span>
                      <p>{item.p}</p>
                      <a href="#j">{item.a}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
