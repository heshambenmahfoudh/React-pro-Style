import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidbar from './Component/Index/Sidbar/Sidbar'
import Element from './Component/Elements/Element'
import About from './Component/Aboutus/About'
import Contact from './Component/Contacts/Contact'
import Index from './Component/Index/Index'
import Blog from './Component/Blogs/Blog'
import Footer from './Component/Index/Footer/Footer'
import Portfolio from './Component/Portfolios/Portfolio'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidbar />

        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="*" element={<Index />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/element" element={<Element />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App
