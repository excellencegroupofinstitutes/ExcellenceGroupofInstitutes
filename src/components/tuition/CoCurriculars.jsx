import React, { useState, useEffect } from "react";
import {
  Trophy,
  Flag,
  Target,
  Star,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ExcellenceCoCurricularRace = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTuitionDemo = () =>{
      document.getElementById("tuition-demo-form")?.scrollIntoView({ behavior: "smooth" });

  }

  const visionImages = [
    {
      src: "/images/co_curricular/cc1.jpg",
      caption: "Celebrating world chess day",
      orientation: "landscape"
    },
    {
      src: "/images/co_curricular/cc2.jpg",
      caption: "World environment day celebration with tree plantation",
      orientation: "landscape"
    },
    {
      src: "images/co_curricular/cc3.jpg",
      caption: "Providing free educational resources and materials",
      orientation: "portrait"
    },
    {
      src: "images/co_curricular/cc4.jpg",
      caption: "Providing free educational resources and materials",
      orientation: "portrait"
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % visionImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + visionImages.length) % visionImages.length
    );
  };

  const activities = [
    {
      icon: Trophy,
      title: "Sports Excellence",
      description:
        "Championship-level athletic programs fostering teamwork and competitive spirit",
      metric: "15+ Sports",
      achievement: "State Champions",
    },
    {
      icon: Star,
      title: "Cultural Arts",
      description:
        "Creative expression through music, dance, drama and visual arts",
      metric: "20+ Events",
      achievement: "Regional Winners",
    },
    {
      icon: Target,
      title: "Academic Competitions",
      description: "Quiz bowls, debate tournaments and knowledge olympiads",
      metric: "50+ Contests",
      achievement: "National Ranks",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description:
        "Student councils, peer mentoring and community service projects",
      metric: "100+ Leaders",
      achievement: "Social Impact",
    },
    {
      icon: Award,
      title: "Innovation Labs",
      description:
        "Science fairs, tech competitions and entrepreneurship programs",
      metric: "25+ Projects",
      achievement: "Budding Scientists",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(cardInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-gray-300"></div>
          <div className="absolute top-40 right-32 w-48 h-48 rounded-full border border-gray-300"></div>
          <div className="absolute bottom-32 left-1/3 w-56 h-56 rounded-full border border-gray-300"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Excellence Group of Institutes
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Beyond
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Academics
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Racing towards holistic excellence through comprehensive
            co-curricular programs that shape tomorrow's leaders
          </p>

          {/* Progress Race Track */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-100 ease-linear relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-yellow-400"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Academic Excellence</span>
                <span>Co-curricular Mastery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                const isActive = index === activeCard;

                return (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-3xl p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                      isActive
                        ? "border-yellow-400 shadow-2xl shadow-yellow-400/20 scale-105"
                        : "border-gray-100 shadow-lg hover:border-yellow-200"
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                  >
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30"
                          : "bg-gray-50 group-hover:bg-yellow-50"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 group-hover:text-yellow-600"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {activity.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {activity.metric}
                        </div>
                        <div className="text-xs text-gray-500">Programs</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-yellow-600">
                          {activity.achievement}
                        </div>
                        <div className="text-xs text-gray-500">Achievement</div>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <ChevronRight
                      className={`absolute top-6 right-6 w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "text-yellow-600 opacity-100 translate-x-0"
                          : "text-gray-400 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Adaptive Image Gallery */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey in Pictures
            </h2>
            <p className="mt-2 text-gray-600">
              Witness the impact of our programs through these memorable moments
            </p>
          </div>

          <div className="relative">
            {/* Main Gallery Container - Adaptive Height */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Container with Dynamic Sizing */}
              <div className="relative w-full">
                <div 
                  className={`
                    relative w-full flex items-center justify-center bg-gray-50 transition-all duration-500
                    ${visionImages[currentImageIndex].orientation === 'portrait' 
                      ? 'h-[600px] md:h-[700px]' 
                      : 'h-[400px] md:h-[500px]'
                    }
                  `}
                >
                  <img
                    key={currentImageIndex}
                    src={visionImages[currentImageIndex].src}
                    alt={visionImages[currentImageIndex].caption}
                    className={`
                      transition-all duration-700 ease-out shadow-lg rounded-lg
                      ${visionImages[currentImageIndex].orientation === 'portrait'
                        ? 'h-full w-auto max-w-[90%] object-contain'
                        : 'w-full h-full object-cover object-bottom'
                      }
                    `}
                    style={{
                      filter: 'brightness(0.95) contrast(1.05)',
                    }}
                  />
                  
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6">
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl font-medium text-center leading-relaxed">
                      {visionImages[currentImageIndex].caption}
                    </p>
                    <div className="mt-2 text-center">
                      <span className="text-sm text-gray-300">
                        {currentImageIndex + 1} of {visionImages.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-yellow-600 transition-colors duration-200" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-yellow-600 transition-colors duration-200" />
                </button>
              </div>
            </div>

            {/* Thumbnail Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {visionImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`
                    relative overflow-hidden rounded-lg transition-all duration-300 border-2 group
                    ${index === currentImageIndex 
                      ? 'border-yellow-400 scale-110 shadow-lg shadow-yellow-400/20' 
                      : 'border-gray-200 hover:border-yellow-300 hover:scale-105'
                    }
                    ${image.orientation === 'portrait' ? 'w-12 h-16' : 'w-16 h-12'}
                  `}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-yellow-400/20"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Image Counter and Orientation Indicator */}
            {/* <div className="flex justify-center mt-4 gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>
                  {visionImages[currentImageIndex].orientation === 'portrait' ? 'Portrait' : 'Landscape'} View
                </span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div onClick={handleTuitionDemo} className="inline-flex items-center gap-4 bg-white rounded-full p-2 pr-6 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
              Start Your Excellence Journey
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceCoCurricularRace;