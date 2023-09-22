import React from 'react'
import AiSumm from '../assets/AiSumm.png'
import "./hero.css"


function handlegithub(e){
    e.preventDefault()
    window.open("https://github.com/AjayKumar-bit/AiSummarizer","_blank")
}
function Hero() {
  return (
   <header className='hero ' >
      <nav className='navbar '>
          <img src={AiSumm} alt='logo' className='w-28 contrast-150 '/>

          <button onClick={handlegithub} className='github-button '>GitHub</button>

      </nav>
      
      <h1 className='header_text'>
            <p>Summarize Article with</p>
            
            <span className='openAi'>AiSummarizer</span>  
      </h1>
      


      
      
   </header>
  )
}

export default Hero