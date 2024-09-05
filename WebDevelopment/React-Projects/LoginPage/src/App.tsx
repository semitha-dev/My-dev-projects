
import { useState } from 'react'
import './App.css'

function App() {
  const[headertext,setheadertext] = useState("Login");
  const[inputvalueName,setinputvalueName] = useState("")
  const[inputvaluePassword,setinputvaluePassword] = useState("")

  const changeText = () =>{
   
  }
  


  return(

    <div id='Main'>

      <div id='header'>
     
      </div>
      <div id='button'>
        <h1>{headertext}</h1>
        <label className='labelNames'>Name : </label>
        <input
         id='inputBarName'
         type='text'
         placeholder='enter you name'
         value={inputvalueName}
         onChange={(e) => setinputvalueName(e.target.value)}
          
        /><br></br>
         <label className='labelNames'>Password : </label>
         <input
         id='inputBar'
         type='text'
         placeholder='enter you password'
         value={inputvaluePassword}
         onChange={(e) => setinputvaluePassword(e.target.value)}
          
        /><br></br>
        <button onClick={changeText}>Submit</button>
      </div>
      


    
    </div>

    
    

  )



 
  
  
  
  


}

export default App
