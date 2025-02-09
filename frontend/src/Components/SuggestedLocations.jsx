import React, { useEffect, useState } from 'react'


const SuggestedLocations = ({ suggestions,setPickupDestination }) => {

  const [locations,setLocations]=useState([]);

  useEffect(()=>{
    setLocations(suggestions)
  },[suggestions])

  const getLocation=(location)=>{
    setPickupDestination(location);
    setLocations([]);
  }

  return (
    <div className='w-full h-full bg-white flex flex-col items-center  gap-5 pb-2 box-content overflow-auto'>
      {
        locations?.map((loc,index) =><div key={index} className=' w-[70%] h-[15%] border-2 border-black rounded-2xl flex items-center justify-center text-wrap break-words px-3  text-center' onClick={()=>getLocation(loc)}>
        
        <p className='text-xs'>{loc}</p>
      </div>
          
        )
      }



    </div>
  )
}

export default SuggestedLocations