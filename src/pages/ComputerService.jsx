import React from "react";
import HeroComputer from "../components/computerService/HeroComputer";
import Course from "../components/computerService/Course";
import GalleryMarquee from "../components/GalleryMarquee";
import AboutComputerCentres from "../components/computerService/AboutComputerCentres";

const ComputerService = () => {
  return (
    <div className="mt-32 md:mt-49">
      <HeroComputer />
      <Course />
      <GalleryMarquee/>
      <AboutComputerCentres/>
    </div>
  );
};

export default ComputerService;
