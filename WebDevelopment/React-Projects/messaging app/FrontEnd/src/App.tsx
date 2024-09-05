import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    
    <div>
      <div id='msgArea'>
        <ul id='msg'>
          <h2>James : Hi </h2>
        </ul>
      </div>
      <br></br>
      <div id='msgSendingArea'>
        <input
        id='msgvalue'
        placeholder='type here.....'
        >

        </input>
        <button id='msgSendBtn'>Send</button>
      </div>

    </div>
    
    



  )
}

export default App
