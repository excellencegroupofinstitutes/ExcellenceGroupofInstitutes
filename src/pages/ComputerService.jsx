import HeroComputer from "../components/computerService/HeroComputer";
import Course from "../components/computerService/Course";
import ComputerAmenities from "../components/computerService/ComputerAmenities";
import AboutComputerCentres from "../components/computerService/AboutComputerCentres";


const ComputerService = () => {
  return (
    <div className="mt-16 md:mt-40">
      <HeroComputer />
      <Course />
      <ComputerAmenities/>
      <AboutComputerCentres/>
    </div>
  );
};

export default ComputerService;
