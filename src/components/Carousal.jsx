 import React, { useState } from 'react'
 import {GrNext,GrPrevious} from "react-icons/gr"
 const Carousal = () => {

  const slides=[
    {
       url:'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/unrec/kotak/WA_WW_3000._CB597604608_.jpg'
    },

    {
      url:' https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/AC_PC_3000x1200_REVISED-29THAUG_UNREC._CB597668177_.jpg'
    },
    {
      url:'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg'
    }
    
  ]

  const[currentIndex,setCurrentIndex]=useState(0);

  function previousHnadler(){

    if (currentIndex>0) {
          let index=currentIndex-1;
          setCurrentIndex(index)
    }
    else{
      setCurrentIndex(2)
    }
      
  }

  function nextHandler(){

      if (currentIndex< slides.length-1) {
        let index=currentIndex+1;
        setCurrentIndex(index)
      }
      else{
        setCurrentIndex(0)
      }
   

  }


   return (
     <div className="  h-[400px]   w-full flex flex-col  relative group">
     
         <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}   className="cursor-pointer w-[full] h-[400px]   bg-cover  object-cover duration-500   "> 
         </div>

         <div className="hidden group-hover:block  absolute top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 p-2 text-white cursor-pointer hover:bg-slate-400 "
          onClick={previousHnadler}>

                 <GrPrevious size={30}/>
         </div>


         <div className="hidden group-hover:block  absolute top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 p-2 text-white cursor-pointer hover:bg-slate-400 "
          onClick={nextHandler} >

                   <GrNext size={30}/>
         </div>

          
     </div>
   )
 }
 
 export default Carousal