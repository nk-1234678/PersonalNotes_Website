import { useEffect, useState } from "react";
import ProfileImageUpload from "./ProfileImageUpload";

const ProfessionalInfoForm = ({ userInfo, onSubmit, setUserInfo }) => {
  const [formData, setFormData] = useState({
    role: "",
    organization: "",
    department: "",
    experience: 0,
    linkedin: "",
    portfolio: "",
  });

  useEffect(() => {
    if (userInfo) {
      setFormData({
        role: userInfo.role || "",
        organization: userInfo.organization || "",
        department: userInfo.department || "",
        experience: userInfo.experience || 0,
        linkedin: userInfo.linkedin || "",
        portfolio: userInfo.portfolio || "",
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // ✅ Send to backend
  };

  return (
    <div className="grid md:grid-cols-3 p-6 gap-6 text-gray-800">
      <ProfileImageUpload userInfo={userInfo} setUserInfo={setUserInfo} />

      <form
        onSubmit={handleSubmit}
        className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="researcher">Researcher</option>
            <option value="developer">Developer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Organization</label>
          <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            type="text"
            placeholder="University / School / Company"
            className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Department / Stream</label>
          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            type="text"
            placeholder="CSE / ECE / HR / R&D"
            className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            type="number"
            placeholder="e.g. 2"
            className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Portfolio / Website</label>
          <input
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-2 flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalInfoForm;
