import React from 'react'
import './Slider.css'
import { slider } from '../Data/dunmmy'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs'

const Slider = () => {
  const sliderlength = slider.length
  const [select, setSelect] = React.useState(0)

  const clicked = (der) => {
    der === 'left'
      ? setSelect(select === sliderlength - 1 ? 0 : select + 1)
      : setSelect(select === 0 ? sliderlength - 1 : select - 1)
  }

  const auto = () => {
    setSelect(select === 0 ? sliderlength - 1 : select - 1)
  }

  React.useEffect(() => {
    const inter = setInterval(() => {
      auto()
    }, 5000)

    return () => {
      clearInterval(inter)
    }
  }, [select])

  return (
    <div className="section-slidar">
      <div className="container">
        <div className="row-slidar">
          <div className="heading-slidar">
            <h2>01. Slider</h2>
          </div>
          <div className="all-content-sli">
            {slider.map(({ image }, index) => (
              <div className="slidar" key={index}>
                <div
                  className={
                    select === index ? 'slidar_image active ' : 'slidar_image'
                  }
                >
                  {select === index && (
                    <>
                      <img src={image} alt="" />
                    </>
                  )}
                </div>
              </div>
            ))}
            <div className="icon">
              <span
                className=" change-image pre"
                onClick={() => clicked('right')}
              >
                <BsArrowLeftShort />
              </span>
              <span
                className=" change-image next"
                onClick={() => clicked('left')}
              >
                <BsArrowRightShort />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
