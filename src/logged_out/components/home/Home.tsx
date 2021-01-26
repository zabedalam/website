import React, { Fragment, useEffect } from "react";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";

function HomeComponent(props: any) {
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <PricingSection />
    </Fragment>
  );
}

export default HomeComponent;
