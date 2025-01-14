import React,{useState} from 'react'
import bg from '../assets/captainCabBg.jpeg'
import { Link,useNavigate } from 'react-router-dom';

const CaptainSignUp = () => {

  const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const navigate=useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data={
        email:email,
        name:fullname,
        phone:phone,
        password:password
      }
  
      console.log(data);
      setfullname('');
      setemail('');
      setphone('');
      setpassword('');
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#2c2c36] text-white">
    <div className="flex items-center justify-center w-full h-[100vh] rounded-[10px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-[500px] bg-[rgba(16,18,27,0.4)] border-[2px] border-[rgba(255,255,255,0.5)] backdrop-blur-[20px] text-white rounded-[10px] p-[30px_40px]">
        <form action="">
          <h1 className="text-[36px] text-center mb-[10px]">Register As Captain</h1>
          <div className="relative w-full h-[50px] my-[15px]">
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e)=>setfullname(e.target.value)}
              className="w-full h-[50px] bg-transparent  border-[rgba(255,255,255,0.2)] outline-none border-[2px]  rounded-[40px] text-[16px] text-white px-[20px] pr-[45px]"
            />
            <i className="bx bxs-user absolute right-[20px] top-1/2 transform -translate-y-1/2"></i>
          </div>
          <div className="relative w-full h-[50px] my-[15px]">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              className="w-full h-[50px] bg-transparent  outline-none border-[2px] border-[rgba(255,255,255,0.2)] rounded-[40px] text-[16px] text-white px-[20px] pr-[45px]"
            />
            <i className="bx bxs-envelope absolute right-[20px] top-1/2 transform -translate-y-1/2"></i>
          </div>
          <div className="relative w-full h-[50px] my-[15px]">
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e)=>setphone(e.target.value)}
              className="w-full h-[50px] bg-transparent outline-none border-[2px] border-[rgba(255,255,255,0.2)] rounded-[40px] text-[16px] text-white px-[20px] pr-[45px]"
            />
            <i className="bx bxs-phone absolute right-[20px] top-1/2 transform -translate-y-1/2"></i>
          </div>
          <div className="relative w-full h-[50px] my-[15px]">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className="w-full h-[50px] bg-transparent outline-none border-[2px] border-[rgba(255,255,255,0.2)] rounded-[40px] text-[16px] text-white px-[20px] pr-[45px]"
            />
            <i className="bx bxs-lock-alt absolute right-[20px] top-1/2 transform -translate-y-1/2"></i>
          </div>
          <button type="submit" onClick={handleSubmit} className="w-full h-[45px] bg-white border-none outline-none mt-[20px] rounded-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer text-[16px] text-[#333] font-semibold hover:bg-[#fdc80c] ">
            Register
          </button>
          <button type="button" onClick={()=>navigate('/user-signup')} className="w-full h-[45px] bg-[#fdc80c] border-none outline-none mt-[10px] rounded-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer text-[16px] text-black font-semibold hover:bg-white hover:text-[#333]">
            Signup as User
          </button>
          <div className="text-center text-[14.5px] my-[20px]">
            <p>
              Already have an account? <Link to="/captain-login" className="text-white font-semibold hover:underline">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CaptainSignUp