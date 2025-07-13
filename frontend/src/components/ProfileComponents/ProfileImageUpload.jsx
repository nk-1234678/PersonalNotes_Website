import { useEffect, useState } from "react";
import { MdPhotoLibrary } from "react-icons/md";
import axios from "axios";

const ProfileImageUpload = ({ userInfo, setUserInfo }) => {
  const [imagePreview, setImagePreview] = useState(
    userInfo?.profileImage
      ? `http://localhost:3000${userInfo.profileImage}`
      : "https://via.placeholder.com/150"
  );

  useEffect(() => {
    if (userInfo?.profileImage) {
      setImagePreview(`http://localhost:3000${userInfo.profileImage}`);
    }
  }, [userInfo]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show preview instantly
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);

    // Prepare form data
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axios.put(
        "http://localhost:3000/api/user/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      // ✅ Update image in state
      setUserInfo(res.data.user);
      setImagePreview(`http://localhost:3000${res.data.user.profileImage}`);
      URL.revokeObjectURL(previewURL);
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-start gap-2">
      <div className="relative w-32 h-32">
        {/* Profile Image Preview */}
        <img
          src={imagePreview}
          alt="Profile"
          className="w-full h-full rounded-full object-cover shadow-md"
        />

        {/* Hidden File Input */}
        <input
          type="file"
          id="profile-upload"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Overlay Upload Button */}
        <label
          htmlFor="profile-upload"
          className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full border border-gray-300 shadow cursor-pointer hover:bg-gray-100"
        >
          <MdPhotoLibrary className="text-indigo-600 text-xl" />
        </label>
      </div>
    </div>
  );
};

export default ProfileImageUpload;
