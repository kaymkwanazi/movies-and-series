/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Navbar } from './assets/components/Navbar'
import { Homepage } from './assets/components/Homepage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from './assets/components/Footer'
import { Movies } from './assets/components/Movies'
import { Series } from './assets/components/Series'
import { Addmovie } from './assets/components/Addmovie'
import { MovieDetails } from './assets/components/MovieDetails'


function App() {
  return (
    <>
      {/* <Navbar title={"dfgdfgdf"} /> */}
       <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/addmovie' element={<Addmovie />} />
          <Route path="/movies/:id/:title" element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
