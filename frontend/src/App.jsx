import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Land from './Pages/Land.jsx'
import UserLogin from './Pages/UserLogin.jsx'
import UserSignUp from './Pages/UserSignUp.jsx'
import CaptainSignUp from './Pages/CaptainSignUp.jsx'
import CaptainLogin from './Pages/CaptainLogin.jsx'
import OtpVerification from './Pages/OtpVerification.jsx'
import CaptainDocumentsUpload from './Pages/CaptainDocumentsUpload.jsx'
import UserHome from './Pages/UserHome.jsx'
import CaptainHome from './Pages/CaptainHome.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-home" element={<UserHome/>}/>
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/verify" element={<OtpVerification />} />
        <Route path='/captain-documents-upload' element={<CaptainDocumentsUpload/>}/>
        <Route path='/captain-home' element={<CaptainHome/>}/>
      </Routes>
    </div>
  )
}

export default App