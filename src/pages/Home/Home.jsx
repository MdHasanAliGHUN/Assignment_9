import Slider from "../../components/Slider";
import Services from "../Services/Services";
import WinterCareTips from "../../components/WinterCareTips";
import MeetOurVets from "../../components/MeetOurVets";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider/>
      <Services/>
      <WinterCareTips/>
      <MeetOurVets/>
      <Testimonials/>
    </div>
  );
};

export default Home;
