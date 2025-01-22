import React from 'react'

const confirmOtp = () => {
  return (
    <div className='w-full h-[60%]'>
        <form className='w-full h-full flex flex-col items-center gap-3 justify-center'>
            <div className='w-[80%]'>
                <p className='font-bold'>Enter OTP</p>
            </div>
            <input type='text' placeholder='Enter OTP' className='w-[80%] h-10 rounded-xl px-3 bg-gray-200'/>
            <button className='bg-green-500 text-white px-10 py-2 font-semibold text-xl rounded-xl'>Confirm</button>
        </form>
    </div>
  )
}

export default confirmOtp