import { useEffect, useState } from "react";
import ProfileImageUpload from "./ProfileImageUpload";

const PersonalInfoForm = ({ userInfo, onSubmit, setUserInfo }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
  });

  // 👇 Update formData when userInfo updates
  useEffect(() => {
    if (userInfo) {
      setFormData({
        firstName: userInfo.firstName || "",
        lastName: userInfo.lastName || "",
        email: userInfo.email || "",
        phone: userInfo.phone || "",
        country: userInfo.country || "",
        city: userInfo.city || "",
        address: userInfo.address || "",
        zipCode: userInfo.zipCode || "",
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };


  return (
    <div className="grid md:grid-cols-3 p-4 gap-6">
      <ProfileImageUpload  userInfo={userInfo} setUserInfo={setUserInfo} />
      <form
        onSubmit={handleSubmit}
        className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 text-gray-800"
      >
        <div>
          <label>First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} disabled className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label>Country</label>
          <input name="country" value={formData.country} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label>City</label>
          <input name="city" value={formData.city} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="md:col-span-2">
          <label>Address</label>
          <input name="address" value={formData.address} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label>Zip Code</label>
          <input name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="col-span-2 flex justify-end mt-4">
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition duration-300">Save Changes</button>
        </div>
      </form>
    </div>
  );
};
export default PersonalInfoForm