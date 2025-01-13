import React from 'react'
import bg from '../assets/captainCabBg.jpeg'

const CaptainLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#2c2c36] text-white">
    <div className="flex items-center justify-center w-full h-[100vh] rounded-[10px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-[420px] bg-[rgba(16,18,27,0.4)] border-[2px] border-[rgba(255,255,255,0.5)] backdrop-blur-[20px] text-white rounded-[10px] p-[30px_40px]">
        <form action="">
          <h1 className="text-[36px] text-center">Welcome Back Captain</h1>
          <div className="relative w-full h-[50px] my-[15px]">
            <input
              type="email"
              placeholder="email"
              required=""
              className="w-full h-[50px] bg-transparent  outline-none border-[2px] border-[rgba(255,255,255,0.2)] rounded-[40px] text-[16px] text-white px-[20px] pr-[45px]"
            />
            <i className="bx bxs-user absolute right-[20px] top-1/2 transform -translate-y-1/2"></i>
          </div>
          <div className="relative w-full h-[50px] my-[15px]">
            <input
              type="password"
              placeholder="Password"
              required=""
              className="w-full h-[50px] bg-transparent  outline-none border-[2px] border-[rgba(255,255,255,0.2)] rounded-[40px] text-[16px] text-white px-[20px] pr-[45px]"
            />
            <i className="bx bxs-lock-alt absolute right-[20px] top-1/2 transform -translate-y-1/2"></i>
          </div>
          <br />
          <button type="submit" className="w-full h-[45px] bg-white border-none outline-none mt-[20px] rounded-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer text-[16px] text-[#333] font-semibold hover:bg-[#ff76ba] hover:text-white">
            Login
          </button>
          <div className="text-center text-[13px] mt-[20px]">
            <a href="#" className="text-white hover:underline">Forget password?</a>
          </div>
          <div className="text-center text-[14.5px] my-[20px]">
            <p>
              Don't have an account? <a href="#" className="text-white font-semibold hover:underline">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CaptainLogin