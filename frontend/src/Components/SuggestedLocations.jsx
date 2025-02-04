import React, { useEffect, useState } from 'react'


const SuggestedLocations = ({ suggestions }) => {

  const [locations,setLocations]=useState([]);

  useEffect(()=>{
    setLocations(suggestions)
  },[suggestions])

  return (
    <div className='w-full h-full bg-white flex flex-col items-center  gap-5 pb-6 box-content'>
      {
        locations?.map((loc,index) =><div key={index} className=' w-[70%] h-[20%] border-2 border-black rounded-2xl flex items-center justify-center text-wrap break-words px-3  text-center'>
        
        <p className='text-xs'>{loc}</p>
      </div>
          
        )
      }



    </div>
  )
}

export default SuggestedLocations