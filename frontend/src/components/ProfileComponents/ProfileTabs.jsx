const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Personal Info", "Professional Info"];

  return (
    <div className="flex gap-4 mb-6 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 text-sm font-medium ${
            activeTab === tab
              ? "text-indigo-600 border-b-2 border-indigo-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
