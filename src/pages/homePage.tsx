import AboutSlice from "../components/about";
import Banner from "../components/banner";
import CrewSection from "../components/crew";
import DownArrow from "../components/downArrow";
import InfoSlice from "../components/Info";
import Slider from "../components/slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <DownArrow />
      <AboutSlice />
      <InfoSlice />
      <Banner />
      <CrewSection />
    </>
  );
};

export default HomePage;
