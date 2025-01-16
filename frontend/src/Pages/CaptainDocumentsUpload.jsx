import React from 'react'

const CaptainDocumentsUpload = () => {
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
              accept="image/*"
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
              accept="image/*"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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