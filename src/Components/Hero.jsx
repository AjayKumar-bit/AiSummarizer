import React from 'react'
import AiSumm from '../assets/AiSumm.png'
import "./hero.css"


function handleclick(e){
    e.preventDefault()
    // window.open()
}
function Hero() {
  return (
   <header className='hero' >
      <nav className='navbar '>
          <img src={AiSumm} alt='logo' className='w-28   '/>

          <button onClick={handleclick} className='github-button '>GITHUB</button>

      </nav>
      
      <h1 className='header_text'>
            Summarize Article with
            <br className='max-sm:hidden'/>
            <span className='openAi'>AiSummarizer</span>  
      </h1>

      
      
   </header>
  )
}

export default Hero