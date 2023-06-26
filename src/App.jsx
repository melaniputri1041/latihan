import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App