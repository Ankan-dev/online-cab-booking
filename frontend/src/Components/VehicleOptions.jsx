import React from 'react'
import Bike from '../assets/Bike.webp'
import Auto from '../assets/Auto.webp'
import Cab from '../assets/Cab.webp'
import { IoPerson } from "react-icons/io5";


const VehicleOptions = ({setVehicleChosen,setRideConfirmed,setHeight}) => {

  const setRide=(ride)=>{
    setVehicleChosen(ride);
    setRideConfirmed(true)
    setHeight("0%")
  }

  return (
    <div className='w-full h-full bg-white flex flex-col items-center  gap-5 '>
         <div className=' lg:w-[80%] w-[90%] lg:h-[20%] h-[25%] border-2 border-black rounded-2xl flex items-center justify-between px-3 gap-3'
         onClick={()=>setRide("Moto")}
         >
               <img src={Bike} alt='bike' className='w-[30%]'/>
                <div className='w-[50%] h-full flex flex-col justify-center'>
                    <h1 className='flex items-center gap-2 font-semibold text-base'>Moto <span className='flex items-center'><IoPerson />1</span></h1>
                    <p className='text-xs font-semibold'>2mins away</p>
                    <p className='text-xs text-gray-400'>Affordabe Motorcycle Rides</p>
                </div>
                <div className='h-full w-[20%] flex items-center px-2 font-bold md:text-sm'>₹65</div>
        </div>
        <div className=' lg:w-[80%] w-[90%] lg:h-[20%] h-[25%] border-2 border-black rounded-2xl flex items-center justify-between px-3 gap-3'
        onClick={()=>setRide("Auto")}
        >
               <img src={Auto} alt='auto' className='w-[30%]'/>
                <div className='w-[50%] h-full flex flex-col justify-center'>
                    <h1 className='flex items-center gap-2 font-semibold text-base'>Auto <span className='flex items-center'><IoPerson />3</span></h1>
                    <p className='text-xs font-semibold'>2mins away</p>
                    <p className='text-xs text-gray-400'>Affordabe Motorcycle Rides</p>
                </div>
                <div className='h-full w-[20%] flex items-center  font-bold md:text-sm'>₹118.86</div>
        </div>
        <div className=' lg:w-[80%] w-[90%] lg:h-[20%] h-[25%] border-2 border-black rounded-2xl flex items-center justify-between px-3 gap-3'
        onClick={()=>setRide("Cab")}
        >
               <img src={Cab} alt='cab' className='w-[30%]'/>
                <div className='w-[50%] h-full flex flex-col justify-center'>
                    <h1 className='flex items-center gap-2 font-semibold text-base'>Cab <span className='flex items-center'><IoPerson />4</span></h1>
                    <p className='text-xs font-semibold'>2mins away</p>
                    <p className='text-xs text-gray-400'>Affordabe Motorcycle Rides</p>
                </div>
                <div className='h-full w-[20%] flex items-center font-bold md:text-sm'>₹193.56</div>
        </div>
    </div>
  )
}

export default VehicleOptions