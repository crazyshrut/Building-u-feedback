import { useState } from 'react'
import Header from "../src/components/Header"
import Loginpage from "../src/Pages/LoginPage"
import Registar from "../src/Pages/RegisterPage"
import Interndashboard from './Pages/Interndashboard'
import Mentordashboard from './Pages/Mentordashboard'

import './App.css'

function App() {

  return (
    <>
    {/* <Header /> */}
     {/* <Interndashboard /> */}
     {/* <Loginpage /> */}
     <Mentordashboard />
     {/* <Registar /> */}
    </>
  )
}

export default App
