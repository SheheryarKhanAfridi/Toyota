import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Main Components/Header/Header'
import Footer from './Main Components/Footer/footer'
import Home from './Main Components/Pages/Home/Home'

function App() {
  

  return (
    <>
      <Header/>
        <Home/>
      {/* <Footer/> */}
    </>
  )
}

export default App
