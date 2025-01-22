import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const ConfirmCancelRide = ({handleConfirmRide}) => {
    return (
        <div className='w-full h-[80%]  bg-transparent flex flex-col items-center'>
            <div className='w-[90%] h-[25%]  flex items-center px-2' >
                <IoLocationSharp className='w-[5rem] h-[1.3rem] text-green-800' />
                <p className='text-xs '>44/1, Bharat Apartment, 4C 5th Main Road, Jayanagar, Bangalore 560041, KA, IND </p>
            </div>
            <hr className='w-[90%] h-[2px] bg-gray-200' />
            <div className='w-[90%] h-[25%]  flex items-center px-2' >
                <IoLocationSharp className='w-[5rem] h-[1.3rem] text-red-600' />
                <p className='text-xs '>44/1, Bharat Apartment, 4C 5th Main Road, Jayanagar, Bangalore 560041, KA, IND </p>
            </div>
            <hr className='w-[90%] h-[2px] bg-gray-200' />
            <button className='w-[80%] h-12 rounded-xl bg-green-600 text-white my-3' onClick={handleConfirmRide}>Confirm Ride</button>
            <button className='w-[80%] h-12 rounded-xl bg-red-500 text-white'>Cancel Ride</button>
        </div>
    )
}

export default ConfirmCancelRide