import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Summary from './Summary'

function Content() {
  return (
    <div>
        <nav>
            <Link className='clsLink' to="/"> Home </Link>
            <Link className='clsLink' to="/about"> About </Link>
            <Link className='clsLink' to="/summary"> Summary </Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/summary' element={<Summary />} />
      </Routes>
    </div>
  )
}

export default Content