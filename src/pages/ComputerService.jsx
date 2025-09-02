import HeroComputer from "../components/computerService/HeroComputer";
import Course from "../components/computerService/Course";
import AboutComputerCentres from "../components/computerService/AboutComputerCentres";
import Amenities from "../components/Amenities";


const ComputerService = () => {
  return (
    <div className="mt-16 md:mt-37">
      <HeroComputer />
      <Course />
      <Amenities/>
      <AboutComputerCentres/>
    </div>
  );
};

export default ComputerService;
