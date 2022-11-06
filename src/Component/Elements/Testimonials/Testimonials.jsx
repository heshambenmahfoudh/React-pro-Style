import React from 'react'
import './Testimonials.css'
import { testimonials } from '../../Elements/Data/dunmmy'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs'
const Testimonials = () => {
  const test_length = testimonials.length

  const [click, setClick] = React.useState(0)
  const clicked = (der) => {
    der === 'left'
      ? setClick(click === test_length - 1 ? 0 : click + 1)
      : setClick(click === 0 ? test_length - 1 : click - 1)
  }

  const auto = () => {
    setClick(click === 0 ? test_length - 1 : click - 1)
  }

  React.useEffect(() => {
    const inter = setInterval(() => {
      auto()
    }, 5000)

    return () => {
      clearInterval(inter)
    }
  }, [click])

  return (
    <div className="section-tes-ls">
      <div className="container">
        <div className="row-test">
          <div className="head-test">
            <h2>07. Testimonials</h2>
          </div>
          <div className="all-test">
            <div className="testmonials">
              {testimonials.map(({ image, h2, blquote }, index) => (
                <div key={index}>
                  {index === click && (
                    <>
                      <div className="img-test">
                        <img src={image} alt="" />
                      </div>
                      <div className="text-testm">
                        <h2>{h2}</h2>
                        <blockquote>{blquote}</blockquote>
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="next-pre-testm">
                <span
                  className=" change  left"
                  onClick={() => clicked('right')}
                >
                  <BsArrowLeftShort />
                </span>
                <span
                  className=" change  right"
                  onClick={() => clicked('left')}
                >
                  <BsArrowRightShort />
                </span>
              </div>
              <ul className="buts" onClick={() => clicked()}>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
