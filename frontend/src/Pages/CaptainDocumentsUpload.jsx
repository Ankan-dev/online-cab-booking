import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainDocumentsUpload = () => {

  const [profile,setProfile]=useState(null);
  const [license,setLicense]=useState(null);
  const [documents,setDocuments]=useState(null);
  const [vehicleColor,setVehicleColor]=useState("");
  const [vehicleType,setVehicleType]=useState("");
  const [numberPlate,setNumberPlate]=useState("");

  const navigate=useNavigate();

  const handleProfileChange=(e)=>{
    setProfile(e.target.files[0]);
  }

  const handleLicenseChange=(e)=>{
    setLicense(e.target.files[0]);
  }

  const handleDocumentsChange=(e)=>{
    setDocuments(e.target.files[0]);
  }

  const handleColorChange=(e)=>{
    setVehicleColor(e.target.value);
  }

  const handleTypeChange=(e)=>{
    setVehicleType(e.target.value);
  }

  const handleNumberPlateChange=(e)=>{
    setNumberPlate(e.target.value);
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    const formData=new FormData();

    formData.append("avatar",profile);
    formData.append("license",license);
    formData.append("documents",documents);
    formData.append("color",vehicleColor);
    formData.append("type",vehicleType);
    formData.append("noPlate",numberPlate);

    try{
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/app/captain/captain-documents`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      },
      );
      if(response && response.status===200){
        navigate('/captain-home');
      }else{
        console.log("Some error occured in getting response");
      }

    }catch(error){
      throw error;
    }

  }

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black">
       
       <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Vehicle Registration Form
        </h2>
        <form className="space-y-4">
          {/* Profile Image */}
          <div>
            <label
              htmlFor="profileImage"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              name="ProfileImage"
              accept="image/*"
              onChange={handleProfileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Driver's License */}
          <div>
            <label
              htmlFor="driversLicense"
              className="block text-sm font-medium text-gray-700"
            >
              Driver's License
            </label>
            <input
              type="file"
              id="driversLicense"
              name="DriversLicense"
              accept="image/*,application/pdf"
              onChange={handleLicenseChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Other Documents */}
          <div>
            <label
              htmlFor="otherDocuments"
              className="block text-sm font-medium text-gray-700"
            >
              Other Documents
            </label>
            <input
              type="file"
              id="otherDocuments"
              name="OtherDocuments"
              accept="application/pdf"
              onChange={handleDocumentsChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Vehicle Color */}
          <div>
            <label
              htmlFor="vehicleColor"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Color
            </label>
            <input
              type="text"
              id="vehicleColor"
              name="VehicleColor"
              required
              onChange={handleColorChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Vehicle Type */}
          <div>
            <label
              htmlFor="vehicleType"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="VehicleType"
              required
              onChange={handleTypeChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Autorickshaw">Autorickshaw</option>
            </select>
          </div>
          {/* Number Plate */}
          <div>
            <label
              htmlFor="numberPlate"
              className="block text-sm font-medium text-gray-700"
            >
              Number Plate
            </label>
            <input
              type="text"
              id="numberPlate"
              name="NumberPlate"
              required
              onChange={handleNumberPlateChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
  )
}

export default CaptainDocumentsUpload