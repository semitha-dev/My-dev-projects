import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

interface NasaImageData{
  title : string;
  description : string;

}

interface NasaImageItem{
  data : NasaImageData[];
  links?: {href: string}[];
}

function App() {

  const [ searchquery , setsearchquery ] = useState<string>('');
  const [nasadata , setnasadata] = useState<NasaImageItem[]>([]);
  const [err , seterr] = useState<string | null >(null);
  const [loading, setLoading] = useState<boolean>(false);



    const fetchdata = async () =>{
      setLoading(true); // Start loading
      seterr(null); // Clear previous errors
      try{
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${searchquery}`)
        setnasadata(response.data.collection.items);
        seterr(null)
      }
      catch(err){
        seterr("error no data found")
        setnasadata([])
      }
      finally{
        setLoading(false);
      }
    }
  

  
  

  return (

    <div>
      <div id='head'>
        <h1>Space lab </h1>



      </div>

      <div id='base'>
        <input
         id='searchbar'
         placeholder='search here'
         value={searchquery}
         onChange={(e) => setsearchquery(e.target.value)}
        />

        <button onClick={fetchdata} > Sumbit </button>
        <div id='dataShowArea'> 
        {loading && <p>Please Wait...</p>} {/* Display loading message */}

          {err && <p>{err}</p>}

          <ul>
            {nasadata.map((item, index) => (
              <li key={index}>
                <h2>{item.data[0].title}</h2>
                {item.links &&  item.links[0] && (
                  <img
                  src={item.links[0].href}
                  alt={item.data[0].title}
                  style={{ width: '300px', height: '200px', objectFit: 'cover' }}

                  />
                )}
                    <h3>{item.data[0].description}</h3>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>


    
      
  )
}

export default App
