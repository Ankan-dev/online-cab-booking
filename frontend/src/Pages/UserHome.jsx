import React, { useState } from 'react'
import SuggestedLocations from '../Components/SuggestedLocations';
import VehicleOptions from '../Components/VehicleOptions';
import RideAcceptedPanel from '../Components/RideAcceptedPanel';
import axios from 'axios';

const UserHome = () => {

  const [height, setHeight] = useState('0%')
  const [opacity, setOpacity] = useState(0)

  const [location, setLocation] = useState(false);
  const [rideConfirmed, setRideConfirmed] = useState(false)
  const [vehicleChosen, setVehicleChosen] = useState("");
  const [PickUp, setPickUp] = useState("");
  const [Destination, setDestination] = useState("");
  const [pickUPChange, setPickUpChange] = useState("");
  const [destinationCHange, setDestinationChange] = useState("")
  const [suggestions, setSuggestions] = useState([]);
  const [prices,setPrices]=useState(null);



  const setPickupDestination = (location) => {
    console.log(location)
    if (PickUp.length === 0) {
      setPickUp(location);
      setPickUpChange(location)
    } else {
      setDestination(location);
      setDestinationChange(location)
      setHeight('0%')
    }
  }

  const getRideDetails = async () => {
    if (PickUp && Destination) {

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/app/ride/getRidePrices`, {
          params: {
            pickup: PickUp,
            destination: Destination
          }
        },{withCredentials:true})

        if(response && response.data){
          setPrices(response.data.data);
        }
      } catch (error) {
        throw error;
      }
    }
  }

  const handlePickupChange = async (e) => {
    setPickUpChange(e.target.value)
    try {
      if (pickUPChange) {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/app/map/getSuggestions`, {
          params: { input: pickUPChange }
        })

        const Data = response.data.data;
        if (response && response.status === 200) {
          //console.log(Data);
          Data.map(elm => {
            setSuggestions(elm)
          })
          console.log(suggestions)

        }
      }
    } catch (error) {
      throw error;
    }
  }

  const handleDestinationChange = async (e) => {
    setDestinationChange(e.target.value)
    try {
      if (destinationCHange) {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/app/map/getSuggestions`, {
          params: { input: destinationCHange }
        })

        const Data = response.data.data;
        if (response && response.status === 200) {
          //console.log(Data);
          Data.map(elm => {
            setSuggestions(elm)
          })
        

        }
      }
    } catch (error) {
      throw error;
    }
  }

  const handleFocus = () => {
    setOpacity(1)
    setHeight('80%');
  }

  const selectVehiclePanel = async(e) => {
    e.preventDefault();
    await getRideDetails();
    setLocation(true);
    setHeight('80%');
    
  }





  return (
    <div className='md:flex w-full md:h-screen relative' >
      <div className='md:w-[35%] lg:h-screen  md:flex flex-col items-center justify-center hidden' >
        {!rideConfirmed ? <form className='w-full h-[40%] flex flex-col  items-center gap-5 py-5'>
          <h2 className='font-bold text-2xl '>Book Your Ride</h2>
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200' placeholder='Pick up' onClick={handleFocus} value={pickUPChange} onChange={handlePickupChange} />
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200' placeholder='Destination' onClick={handleFocus} value={destinationCHange} onChange={handleDestinationChange} />
          {!vehicleChosen ? <button className='bg-yellow-400 px-10 py-2 font-semibold text-xl rounded-xl' onClick={selectVehiclePanel}>Confirm</button> : <button className='bg-yellow-400 px-10 py-2 font-semibold text-xl rounded-xl' >Confirm Ride</button>}
        </form> : <></>}
        <div className='w-full bg-white transition-all duration-500 ' style={{ height: height, opacity: opacity }}>
          {
            location && !vehicleChosen ? <VehicleOptions setVehicleChosen={setVehicleChosen} setRideConfirmed={setRideConfirmed} setHeight={setHeight} /> : !vehicleChosen ? <SuggestedLocations suggestions={suggestions} setPickupDestination={setPickupDestination} /> : <></>
          }
        </div>
        {rideConfirmed ? <RideAcceptedPanel /> : <></>}
      </div>
      <div className='md:w-[65%] md:h-screen bg-green-400 w-full h-[100vh] fixed top-0 z-[-1] md:relative md:z-0'>

      </div>
      <div className='md:hidden w-full h-[100vh] absolute bg-transparent top-0 flex flex-col justify-end ' >
        {!rideConfirmed ? <form className='w-full h-[30%] flex flex-col  items-center gap-2 pt-3 bg-white'>
          <h2 className='font-bold text-2xl '>Book Your Ride</h2>
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200 text-sm' placeholder='Pick up' onClick={handleFocus} value={pickUPChange} onChange={handlePickupChange} />
          <input className='w-[80%] h-10 rounded-xl px-3 bg-gray-200 text-sm' placeholder='Destination' onClick={handleFocus} value={destinationCHange} onChange={handleDestinationChange} />
          {!vehicleChosen ? <button className='bg-yellow-400 px-8 py-[8px] font-semibold text-base rounded-xl' onClick={selectVehiclePanel}>Confirm</button> : <button className='bg-yellow-400 px-8 py-[8px] font-semibold text-base rounded-xl' >Confirm Ride</button>}
        </form> : <></>}
        <div className='w-full bg-white transition-all duration-500 pt-5' style={{ height: height, opacity: opacity }}>
          {
            location && !vehicleChosen ? <VehicleOptions setVehicleChosen={setVehicleChosen} setRideConfirmed={setRideConfirmed} setHeight={setHeight} prices={prices}/> : !vehicleChosen ? <SuggestedLocations suggestions={suggestions} setPickupDestination={setPickupDestination} /> : <></>

          }
        </div>
        {rideConfirmed ? <RideAcceptedPanel /> : <></>}
      </div>
    </div>
  )
}

export default UserHome