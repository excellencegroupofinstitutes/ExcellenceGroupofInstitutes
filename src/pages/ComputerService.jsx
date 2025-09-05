import HeroComputer from "../components/computerService/HeroComputer";
import Course from "../components/computerService/Course";
import AboutComputerCentres from "../components/computerService/AboutComputerCentres";
import Amenities from "../components/Amenities";
import BookDemoForm from "../components/BookDemoForm";
import ComputerMarquee from "../components/computerService/ComputerMarquee";


const ComputerService = () => {
  return (
    <div className="mt-16 md:mt-37">
      <HeroComputer />
      <Course />
      <Amenities/>
      <ComputerMarquee/>
      <AboutComputerCentres/>
      <BookDemoForm demoReason="Computer center"/>  
      
    </div>
  );
};

export default ComputerService;
