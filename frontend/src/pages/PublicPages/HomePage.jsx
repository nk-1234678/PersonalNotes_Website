// src/pages/Public/HomePage.jsx

import FeaturesSection from "../../components/HomePage_Components/FeaturesSections";
import HowItWorksSection from "../../components/HomePage_Components/HowItWorksSection";
import IntroSection from "../../components/HomePage_Components/IntroSection";
import WhoItIsFor from "../../components/HomePage_Components/WhoItIsFor";

const HomePage = () => {
  return (
    <div>
      <IntroSection/>
      <WhoItIsFor/>
      <FeaturesSection/>
      <HowItWorksSection/>
    </div>
  );
};

export default HomePage;
