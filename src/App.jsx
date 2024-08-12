import { useState } from 'react'
import { Navbar } from './assets/components/Navbar'
import { Homepage } from './assets/components/Homepage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from './assets/components/Footer'
import { Movies } from './assets/components/Movies'
import { Series } from './assets/components/Series'
import { Addmovie} from './assets/components/Addmovie'


function App() {
  return (
    <>
      <Navbar />
       <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/addmovie' element={<Addmovie />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
