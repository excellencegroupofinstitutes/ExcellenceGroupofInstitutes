import React from "react";
import HeroComputer from "../components/computerService/HeroComputer";
import Course from "../components/computerService/Course";
import GalleryMarquee from "../components/GalleryMarquee";
import ComputerAmenities from "../components/computerService/ComputerAmenities";
import AboutComputerCentres from "../components/computerService/AboutComputerCentres";


const ComputerService = () => {
  return (
    <div className="mt-17 md:mt-40">
      <HeroComputer />
      <Course />
      <ComputerAmenities/>
      {/* <GalleryMarquee/> */}
      <AboutComputerCentres/>

    </div>
  );
};

export default ComputerService;
