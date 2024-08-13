<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 77e769c89af361290d756b564f0ca3f31f29a6f9
import { useState } from 'react'
import { Navbar } from './assets/components/Navbar'
import { Homepage } from './assets/components/Homepage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from './assets/components/Footer'
import { Movies } from './assets/components/Movies'
import { Series } from './assets/components/Series'
<<<<<<< HEAD
import { Addmovie } from './assets/components/Addmovie'
import { MovieDetails } from './assets/components/MovieDetails'
=======
import { Addmovie} from './assets/components/Addmovie'
>>>>>>> 77e769c89af361290d756b564f0ca3f31f29a6f9


function App() {
  return (
    <>
<<<<<<< HEAD
      {/* <Navbar title={"dfgdfgdf"} /> */}
=======
      <Navbar />
>>>>>>> 77e769c89af361290d756b564f0ca3f31f29a6f9
       <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/addmovie' element={<Addmovie />} />
<<<<<<< HEAD
          <Route path="/movies/:id/:title" element={<MovieDetails />} />
=======
>>>>>>> 77e769c89af361290d756b564f0ca3f31f29a6f9
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
