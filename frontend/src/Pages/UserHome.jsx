import React, { useState } from 'react'
import SuggestedLocations from '../Components/SuggestedLocations';
import VehicleOptions from '../Components/VehicleOptions';
import RideAcceptedPanel from '../Components/RideAcceptedPanel';


const UserHome = () => {

  const [height, setHeight] = useState('0%')
  const [opacity,setOpacity]=useState(0)
  
  const [location,setLocation]=useState(false);
  const [rideConfirmed,setRideConfirmed]=useState(false)
  const [vehicleChosen,setVehicleChosen]=useState("");

  const handleFocus = () => {
    setOpacity(1)
    setHeight('80%');
  }

  const selectVehiclePanel=(e)=>{
    e.preventDefault();
    setLocation(true);
  }

  console.log(vehicleChosen)

  return (
    <div className='md:flex w-full md:h-screen relative' >
      <div className='md:w-[35%] lg:h-screen  md:flex flex-col items-center justify-center hidden' >
        {!rideConfirmed?<form className='w-full h-[40%] flex flex-col  items-center gap-5 py-5'>
          <h2 className='font-bold text-2xl '>Book Your Ride</h2>
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200' placeholder='Pick up' onClick={handleFocus} />
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200' placeholder='Destination' onClick={handleFocus} />
          <button className='bg-yellow-400 px-10 py-2 font-semibold text-xl rounded-xl' onClick={selectVehiclePanel}>Confirm</button>
        </form>:<></>}
        <div className='w-full bg-white transition-all duration-500 ' style={{ height: height,opacity:opacity }}>
        {
          location && !rideConfirmed?<VehicleOptions setVehicleChosen={setVehicleChosen} setRideConfirmed={setRideConfirmed} setHeight={setHeight}/>:!rideConfirmed?<SuggestedLocations/>:<></>
        }
        </div>
        {rideConfirmed?<RideAcceptedPanel/>:<></>}
      </div>
      <div className='md:w-[65%] md:h-screen bg-green-400 w-full h-[100vh] fixed top-0 z-[-1] md:relative md:z-0'>

      </div>
      <div className='md:hidden w-full h-[100vh] absolute bg-transparent top-0 flex flex-col justify-end ' >
        {!rideConfirmed?<form className='w-full h-[30%] flex flex-col  items-center gap-2 pt-3 bg-white'>
          <h2 className='font-bold text-2xl '>Book Your Ride</h2>
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200 text-sm' placeholder='Pick up' onClick={handleFocus} />
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200 text-sm' placeholder='Destination' onClick={handleFocus} />
          <button className='bg-yellow-400 px-8 py-[8px] font-semibold text-base rounded-xl' onClick={selectVehiclePanel}>Confirm</button>
        </form>:<></>}
        <div className='w-full bg-white transition-all duration-500 pt-5' style={{ height:height,opacity:opacity }}>
          {
            location && !rideConfirmed?<VehicleOptions setVehicleChosen={setVehicleChosen} setRideConfirmed={setRideConfirmed} setHeight={setHeight}/>:!rideConfirmed?<SuggestedLocations/>:<></>
            
          }
        </div>
        {rideConfirmed?<RideAcceptedPanel/>:<></>}
      </div>
    </div>
  )
}

export default UserHome