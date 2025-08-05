import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../assets/iphone-14-pro.webp";
import mac from "../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection
        title="Buy iPhone 16 pro E"
        subtitle="Experience the power of the latesr iPhone 14 with our most Pro Camera"
        link="/"
        image={iphone}
      />
      {/* feature section */}
      <FeaturedProducts />
      {/* hero Section */}
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your mac mini.. "
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
