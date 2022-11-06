import React from 'react'
import './Sidbar.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sidbar = () => {
  const [activeMenu, setActiveMenu] = React.useState(false)

  React.useEffect(() => {
    const closeMenu = (e) => {
      if (e.path[1].tagName !== 'SPAN') {
        setActiveMenu(!e)
      }
    }
    document.body.addEventListener('click', closeMenu)
  }, [])
  return (
    <nav>
      <div className="container">
        <h1 className="lg">
          <NavLink to="/">Style .</NavLink>
        </h1>
        <div className="sidbar">
          <span className="Menu">
            <AiOutlineMenu onClick={() => setActiveMenu(true)} />
          </span>
          {activeMenu && (
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: '0%' }}
              transition={{ type: 'tween', duration: 0.6 }}
              className="links"
            >
              <span onClick={() => setActiveMenu(false)} className="close">
                {<AiOutlineClose />}
              </span>
              <ul
                onClick={() => setActiveMenu('/')}
                className={activeMenu === '/' ? 'active' : ''}
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/element">Element</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Sidbar
