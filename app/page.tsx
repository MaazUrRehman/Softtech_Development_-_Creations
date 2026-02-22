import AboutUsHomeSection from "./components/AboutUsHome";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import PricePlanSection from "./components/PricePlan";
import TechnologiesSection from "./components/Technologies";
import WhyChooseUsSection from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUsHomeSection />
      <WhyChooseUsSection />
      <HowWeWork />
      <TechnologiesSection />
      <PricePlanSection />
      <FooterSection />
    </>
    
  );
}
