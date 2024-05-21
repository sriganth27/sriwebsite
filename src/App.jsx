import { useState } from 'react'

import './App.css'
import Navebar from './component/Navebar'
import Hero from './component/Hero/Hero'
import Skills from './component/skill/Skills'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

      <BrowserRouter>
        
          <Navebar />
          <div className='container'>
          <Routes>
            <Route path='/' element={<> <Hero />
              <Skills />
              <Project />
              <Contact /></>} />

            <Route path='/skills' element={<><Skills />   </> } />
            <Route path='/project' element={<><Project /> </>} />
            <Route path='/contact' element={<><Contact /> </>} />



          </Routes>
        

        </div>
        <Footer />
        

      </BrowserRouter>

    </>
  )
}

export default App
