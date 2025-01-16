import React,{useState,useRef,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const OtpVerification = () => {

  const [otp,setOtp] = useState('') ;
  const location=useLocation();

  const {email,role}=location.state || {};

  const one=useRef(null);
  const two=useRef(null);
  const three=useRef(null);
  const four=useRef(null);
  const five=useRef(null);


  useEffect(()=>{
    one.current.focus();

  },[])
  
  const getOtp=(e,shiftReference)=>{
    const previousInputs=otp;
    let NewInput=previousInputs+e.target.value;
    setOtp(NewInput);

    if(NewInput,shiftReference){
      shiftReference.current.focus();
    }
  }

  const handleSubmit= async(e)=>{

    e.preventDefault();

    if(role==="user"){
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/app/user/verify`,{email:email,otp:otp});

      if(response && response.status===200){
        console.log(response.data);
      }
    }else{
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/app/captain/verify`,{email:email,otp:otp});

      if(response && response.status===200){
        console.log(response.data);
      }
    }
    
  }

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black">
  <div className="container rounded-lg bg-white w-[90%] max-w-[500px] p-12 text-center">
    <h1 className="title text-2xl mb-8">Enter OTP</h1>
    <form id="otp-form" className="w-full flex gap-5 items-center justify-center">
      <input
        ref={one}
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
        onChange={(e)=>getOtp(e,two)}
      />
      <input
        ref={two}
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
        onChange={(e)=>getOtp(e,three)}
      />
      <input
        ref={three}
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
        onChange={(e)=>getOtp(e,four)}
      />
      <input
        ref={four}
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
        onChange={(e)=>getOtp(e,five)}
      />
      <input
        ref={five}
        type="text"
        className="otp-input border-2 border-yellow-400  text-black text-4xl text-center p-2 w-full max-w-[70px] h-[70px] rounded-md outline-none  "
        maxLength={1}
        onChange={getOtp}
      />
    </form>
    <button
      id="verify-btn"
      className="cursor-pointer inline-block mt-8 bg-yellow-400 text-white px-3 py-2 rounded-md text-lg border-none"
      onClick={handleSubmit}
    >
      Verify OTP
    </button>
  </div>
</section>

  )
}

export default OtpVerification