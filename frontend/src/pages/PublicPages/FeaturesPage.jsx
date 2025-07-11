import CoreFeaturesCarousel from "../../components/FeaturesPage_Components/CoreFeaturesCarousel"
import FAQSection from "../../components/FeaturesPage_Components/FAQSection"
import HeroSection from "../../components/FeaturesPage_Components/HeroSection"
import SyncAccessSection from "../../components/FeaturesPage_Components/SyncAccessSection"


const FeaturesPage = () => {
  return (
    <div>
        <HeroSection/>
        <CoreFeaturesCarousel/>
        <SyncAccessSection/>
        <FAQSection/>
    </div>
  )
}
export default FeaturesPage