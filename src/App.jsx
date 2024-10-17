import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Porduct from './pages/Porduct'
import About from './pages/About'
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import ContactLayout from './Layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import Jobs, { JobsLoader } from './pages/Jobs'
 import JobsLayout from './Layout/JobsLAyout'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route  index  element={<Home/>}/>
        <Route  path='product' element={<Porduct/>}/>
        <Route  path='about' element={ <About/>}/>
        <Route  path='contact' element={ <ContactLayout/>}>
           <Route path='info' element={<ContactInfo/>}/>
           <Route path='form' element={<ContactForm/>}/>
        </Route>
        <Route path='jobs' element={<JobsLayout/>}> 
          <Route index element={<Jobs/>} loader={JobsLoader}/>
          <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <div>
     <RouterProvider router = {router} />
    </div>
  )
}

export default App
