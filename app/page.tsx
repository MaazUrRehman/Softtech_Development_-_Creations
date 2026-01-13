import AboutUsHomeSection from "./components/AboutUsHome";
import Achievements from "./components/Achievements";
import CallToAction from "./components/CTA";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import PortfolioSection from "./components/Portfolio";
import PricePlanSection from "./components/PricePlan";
import ServicesSection from "./components/ServicesHome";
import TechnologiesSection from "./components/Technologies";
import WhyChooseUsSection from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUsHomeSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <HowWeWork />
      <TechnologiesSection />
      <PricePlanSection />
      <FooterSection />
    </>
    
  );
}
