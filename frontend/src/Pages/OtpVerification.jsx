import React from 'react'

const OtpVerification = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black">
  <div className="container rounded-lg bg-white w-[90%] max-w-[500px] p-12 text-center">
    <h1 className="title text-2xl mb-8">Enter OTP</h1>
    <form id="otp-form" className="w-full flex gap-5 items-center justify-center">
      <input
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
      />
      <input
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
      />
      <input
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
      />
      <input
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
      />
      <input
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
      />
    </form>
    <button
      id="verify-btn"
      className="cursor-pointer inline-block mt-8 bg-yellow-400 text-white px-3 py-2 rounded-md text-lg border-none"
    >
      Verify OTP
    </button>
  </div>
</section>

  )
}

export default OtpVerification