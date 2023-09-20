import React, { useCallback, useEffect, useRef, useState } from 'react'
import "./Summary.css"
import { useLazyGetSummaryQuery } from '../Services/Article'
import copy from '../assets/image/copy.svg'
import loader from "../assets/image/loader.svg"







function Summary() {

  const [article,setArticle]=useState(
    {
      url:"",
      summary:""
    }
  )




  const [getSummary,{error,isFetching}]=useLazyGetSummaryQuery()




  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {data} =await getSummary({articleUrl:article.url})
    // checking if the data habe summary property
    if(data?.summary){
      const newArticle={...article,summary:data.summary}
      setArticle(newArticle)

      

      
       


    }
  }

  const copy_button_ref=useRef()
  const copyArticle=useCallback((e)=>{
    e.preventDefault()
    window.navigator.clipboard.writeText(article.summary)
    copy_button_ref.current.textContent="Copied"
    

  },[article.summary])



  return (
    <section className='Summary' >
       <div className='inputArea'>
     
           <form onSubmit={handleSubmit}>
                  <input className="inputBox" type='text' value={article.url} placeholder='Paste article link Here' onChange={(e) => setArticle({ ...article, url: e.target.value })}>

                  </input>

                  <button className='summarizeButton bg-black' type='submit'>
                      Summarize
                  </button>
                  
           </form>
         </div>  
       
        <div className='article w-full flex justify-center items-center h-auto '>
              {(isFetching)?(
                <img src={loader} alt='loading....' className='w-10 h-10'>

                </img>
              ):error?(
                <p>
                  {error?.data?.error}
                </p>
              ): (
                article.summary && (
                  <div>
                    <p className='Header_Text_Article '>
                       
                          Summary
                       
                    </p>
                    <div className='summary_text'>
                        <p className='px-6 py-3'>
                          {article.summary}
                        </p>
                        <button className='copy_button' onClick={copyArticle} ref={copy_button_ref}> copy</button>
                    </div>
                  </div>
                )
              )
              }
        </div>
    </section>

  )
}

export default Summary