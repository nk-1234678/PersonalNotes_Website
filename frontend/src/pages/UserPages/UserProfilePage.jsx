import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import ProfileHeader from "../../components/ProfileComponents/ProfileHeader";
import ProfileTabs from "../../components/ProfileComponents/ProfileTabs";
import ProfessionalInfoForm from "../../components/ProfileComponents/ProfessionalInfoForm";
import PersonalInfoForm from "../../components/ProfileComponents/PersonalInfoForm";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "Personal Info"
  );

  const [userInfo, setUserInfo] = useState(null); // for holding user data

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  // ✅ Fetch user info on mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/profile", {
          withCredentials: true,
        });
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          setUserInfo(res.data.user);
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to load user data");
      }
    };

    fetchUserInfo();
  }, []);

  // ✅ Submit handler for updating user info
  const handleUpdate = async (updatedData) => {
  console.log("Submitting Updated Data: ", updatedData); // 🧪 Check this
  try {
    const res = await axios.put(
      "http://localhost:3000/api/user/update-profile",
      updatedData,
      {
        withCredentials: true,
      }
    );

    if (res.data.success === false) {
      toast.error(res.data.message);
      return;
    }

    toast.success("Profile updated successfully");
    setUserInfo(res.data.user); // 🧪 log this too
    console.log("Updated User Response:", res.data.user);
  } catch (err) {
    console.log(err);
    toast.error("Update failed");
  }
};


    
  return (
    <div className="h-full flex flex-col text-white">
      {/* Header Section */}
      <div>
        <ProfileHeader />
      </div>

      {/* Tabs Section */}
      <div>
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Form Section */}
      <div className="flex-grow bg-white p-6 rounded-xl shadow-lg overflow-y-auto text-black">
        {activeTab === "Personal Info" ? (
          <PersonalInfoForm
            userInfo={userInfo}
            onSubmit={handleUpdate}
            setUserInfo={setUserInfo}
          />
        ) : (
          <ProfessionalInfoForm
          userInfo={userInfo} 
          onSubmit={handleUpdate}
          setUserInfo={setUserInfo} />
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
