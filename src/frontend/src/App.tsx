import About from "./components/About";
import CTABanner from "./components/CTABanner";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChoose />
        <CaseStudies />
        <Statistics />
        <Testimonials />
        <CTABanner />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
