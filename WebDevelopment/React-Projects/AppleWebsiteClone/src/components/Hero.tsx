
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

import { heroVideo,smallHeroVideo } from '../utlis'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? 
     smallHeroVideo : heroVideo
  )

  const handleWidth = () => {
    if(window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)

    }
    else{
      setvideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize' , handleWidth)

    return() =>{
      window.removeEventListener('resize',handleWidth)
    }
  })
  useGSAP(() =>{
    gsap.to('#hero' , {opacity:1 , delay:2})
    gsap.to('#cta' , {opacity:1 , y:-50, delay:2})
  },[])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col' >
      <p id='hero'  className='hero-title'>iPhone 16 Pro</p>

      <div className='md:w-10/12 w-9/12'>
       <video className='pointer-events-none'autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type='video/mp4'/>
       </video>
      </div>

      </div>
      <br></br>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/Month or $999</p>
      </div>

    </section>
  )
}

export default Hero