import React from "react";
import HeroComputer from "../components/computerService/HeroComputer";
import Course from "../components/computerService/Course";
import GalleryMarquee from "../components/GalleryMarquee";
import ComputerAmenities from "../components/computerService/ComputerAmenities";

const ComputerService = () => {
  return (
    <div className="mt-32 md:mt-49">
      <HeroComputer />
      <Course />
      <ComputerAmenities/>
      <GalleryMarquee
        row1={[
          "/images/core-tuition.jpeg",
          "/images/demo.jpg",
          "/images/director.png",
          "/images/logo.png",
          "/images/ourresult.jpg",
        ]}
        row2={[
          "/gallery/6.jpg",
          "/gallery/7.jpg",
          "/gallery/8.jpg",
          "/gallery/9.jpg",
          "/gallery/10.jpg",
        ]}
        height={180}
        gap={20}
      />
    </div>
  );
};

export default ComputerService;
