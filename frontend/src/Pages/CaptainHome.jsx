import React,{useState} from 'react'
import ConfirmOtp from '../Components/ConfirmOtp';
import ConfirmCancelRide from '../Components/ConfirmCancelRide';


const CaptainHome = () => {

  const [containerHeight,setContainerHeight]=useState('60%')
  const [confirmRide,setConfirmRide]=useState(false);
  const [reachedLoaction, setReachedLocation]=useState(false);

  const handleConfirmRide=()=>{
    setContainerHeight('40%')
    setConfirmRide(true)
  }

  const handleReachedLocation=()=>{
    setReachedLocation(true);
  }

  return (
    <div className='w-full h-screen relative'>
      <div className='w-full h-full bg-green-300'></div>
      <div className='w-full bg-white absolute bottom-0 flex flex-col items-center justify-center py-1 transition-all duration-500' style={{height:containerHeight}}>
        <h1 className='font-bold text-2xl my-3'>Confirm This Ride To Start</h1>
        <div className='w-[90%] h-[20%] bg-yellow-400 flex items-center justify-around rounded-xl'>
          <img src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png'
            className='w-[12%] border-2 border-black rounded-full pt-1 bg-white'
          />
          <h2 className='font-bold'>Ankan Mandal</h2>
          <h2 className='font-bold'>2.2Km</h2>
        </div>
        {
          (confirmRide===false && reachedLoaction===false)?<ConfirmCancelRide handleConfirmRide={handleConfirmRide}/>:(confirmRide===true && reachedLoaction===false )?<button className='w-[80%] h-12 rounded-xl bg-green-500 text-white my-5' onClick={handleReachedLocation}>Reached To Pickup</button>:<ConfirmOtp/>
        }
        
      </div>
    </div>
  )
}

export default CaptainHome