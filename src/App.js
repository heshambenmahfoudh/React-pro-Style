import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sidbar from './Component/Index/Sidbar/Sidbar'
import Element from './pages/Element'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Footer from './Component/Index/Footer/Footer'
function App() {
  return (
    <div className="App">
        <Sidbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/element" element={<Element />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
    </div>
  )
}
export default App
