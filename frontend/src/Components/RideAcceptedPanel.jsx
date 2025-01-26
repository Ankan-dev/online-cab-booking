import React, { useState } from 'react';

const RideAcceptedPanel = () => {

  const [height,setHeight]=useState('6rem');
  const [display,setDisplay]=useState("none")

  const displayDetails=()=>{
    height==='6rem'?setHeight('40rem'):setHeight('6rem');
    display==="none"?setDisplay('block'):setDisplay("none")

  }

  return (
    <div className='py-3 w-full  flex flex-col items-center bg-white justify-end transition-all duration-500' style={{height:height}}>
      {/* Rider Info */}
      <div className='w-[90%] h-[4.5rem] bg-yellow-400 rounded-xl flex justify-around items-center shadow-md transition-all duration-500' onClick={displayDetails}>
        <img 
          src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/001.webp' 
          className='w-[3rem] h-[3rem] rounded-full' 
          alt='Profile'
        />
        <h2 className='font-bold text-gray-800'>Aman Singh</h2>
        <h2 className='font-bold text-gray-800'>2.2Km</h2>
      </div>

      {/* Vehicle Info */}
      <div className='w-[90%] h-[80%] bg-white mt-4 rounded-xl p-4 shadow-lg ' style={{display:display}}>
      <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>One Time Password(OTP):</span>
          <span>12345</span>
        </p>
      <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>PickUp:</span>
          <span>PickUp Location</span>
        </p>
        <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>Drop:</span>
          <span>Drop Location</span>
        </p>
        <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>Price:</span>
          <span>198</span>
        </p>
        <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>Vehicle Color:</span>
          <span>Yellow</span>
        </p>
        <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>Vehicle Type:</span>
          <span>Auto</span>
        </p>
        <p className='w-full border-b border-gray-300 py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>Vehicle Number:</span>
          <span>XYZ12345</span>
        </p>
        <p className='w-full py-3 text-gray-700 text-lg flex justify-between'>
          <span className='font-semibold'>Vehicle Color:</span>
          <span>Yellow</span>
        </p>
      </div>
    </div>
  );
};

export default RideAcceptedPanel;
