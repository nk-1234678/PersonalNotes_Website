// src/pages/Public/HomePage.jsx

import AppPreviewSection from "../../components/HomePage_Components/AppPreviewSection";
import FeaturesSection from "../../components/HomePage_Components/FeaturesSections";

import IntroSection from "../../components/HomePage_Components/IntroSection";
import MobileAppSection from "../../components/HomePage_Components/Mobileappsection";
import WhoItIsFor from "../../components/HomePage_Components/WhoItIsFor";

const HomePage = () => {
  return (
    <div>
      <IntroSection/>
      <WhoItIsFor/>
      <FeaturesSection/>
      <MobileAppSection/>
      <AppPreviewSection/>
    </div>
  );
};

export default HomePage;
