import Hero from "./components/hero-section/Hero";
import Navbar from "./components/navbar/Navbar";
import WhySection from "./components/why-section/WhySection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhySection />
    </div>
  );
};

export default App;
