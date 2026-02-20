import AboutUs from "../components/AboutUs";
import Achievements from "../components/Achievements";
import Blogs from "../components/Blogs";
import FAqs from "../components/FAQs";
import FooterSection from "../components/Footer";
import Header from "../components/Header";
import Journey from "../components/Journey";
import Methodology from "../components/Methodology";
import TestimonialsSection from "../components/Testimonials";

export default function AboutPage() {
  return (
    <>
        <Header />
        <AboutUs />
        <Journey />
        <Methodology />
        <Achievements />
        <TestimonialsSection />
        <Blogs />
        <FAqs />
        <FooterSection />

    </>
  );
}