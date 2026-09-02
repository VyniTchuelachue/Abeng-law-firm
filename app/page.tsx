import Hero from "./components/home/Hero";
import TrustStrip from "./components/home/TrustStrip";
import AboutFirm from "./components/home/AboutFirm";
import WhyAbeng from "./components/home/WhyAbeng";
import Expertise from "./components/home/Expertise";
import Founder from "./components/home/Founder";
import International from "./components/home/International";
import HowWeWork from "./components/home/HowWeWork";
import InsightsTeaser from "./components/home/InsightsTeaser";
import Reviews from "./components/home/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <AboutFirm />
      <WhyAbeng />
      <Expertise />
      <Founder />
      <International />
      <HowWeWork />
      <InsightsTeaser />
      <Reviews />
    </main>
  );
}
