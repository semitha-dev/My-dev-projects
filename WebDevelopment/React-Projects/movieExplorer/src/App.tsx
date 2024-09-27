import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import PopularMovie from './popularmovies'
import './App.css'

function App() {



  return (
    <div className='App'>
      <h1>PopularMovie</h1>
      <PopularMovie />
    </div>

    
  )
}

export default App
