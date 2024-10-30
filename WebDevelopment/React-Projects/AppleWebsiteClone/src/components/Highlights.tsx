import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg } from "../utlis"

const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title', {opacity:1 , y:0, delay:1})
  },[])
  return (
    <section id="highlights" className="w-screen h-full overflow-hidden
    bg-zinc common-padding">

      <div className="screen-max-width"></div>
      <div className="mb-12 w-full items-end justify-between">

        <h1 id="title" className="section-heading">Get The Highlights</h1>

        <div className="flex flex-wrap items-end gap-5">
          
          <p className="link">
            Watch the film 
            <img src={watchImg}/>
            
          </p>
        </div>
      </div>

    </section>
  )
}

export default Highlights