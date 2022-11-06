import React, { useState } from 'react'
import './Chooseus.css'
import { chooseus } from '../Data/dunmmy'
import { BsFolderMinus } from 'react-icons/bs'
import { BsFolderPlus } from 'react-icons/bs'

const Chooseus = () => {
  const [selected, setSlected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSlected(null)
    }
    setSlected(i)
  }
  return (
    <div className="chooseus">
      <div className="container">
        {chooseus.map((item, i) => (
          <div className="row-acc" key={i}>
            <div className="title">
              <h2>{item.h2}</h2>
              <div className="line"></div>
              <p>{item.p}</p>
              <p className="btn">
                <a href="#">{item.a}</a>
              </p>
            </div>
            <div className="accor">
              {item.title.map((item, i) => (
                <div key={i}>
                  <div className="acc" onClick={() => toggle(i)}>
                    <span>
                      {selected === i ? <BsFolderMinus /> : <BsFolderPlus />}
                    </span>
                    <h1>{item.button}</h1>
                  </div>
                  <div className={selected === i ? 'desc show' : 'desc'}>
                    <p>{item.pone}</p>
                    <p>{item.ptwo}</p>
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

export default Chooseus
/*
import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

class Test extends React.Component {
  render() {
    <StyleRoot>
      <div className="test" style={styles.bounce}>
      </div>
    </StyleRoot>
  }
}
Usa
*/

///////////////////

//animate__rotateInUpLeft

//import 'animate.css';

//<h1 class="animate__animated animate__bounce">An animated element</h1>
///////////////////////////////
/*
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1s'
  }
})
*/
