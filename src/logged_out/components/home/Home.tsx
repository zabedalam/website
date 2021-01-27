import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";

function HomeComponent(props: any) {
  return (
    <div>
      <HeadSection />
      <FeatureSection />
      <PricingSection />
    </div>
  );
}

export default HomeComponent;
