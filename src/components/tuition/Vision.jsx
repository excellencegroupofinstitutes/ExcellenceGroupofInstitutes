import React, { useState } from 'react'
import { Heart, BookOpen, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const Vision = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const visionImages = [
    { 
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      caption: "Teaching underprivileged children in our community center"
    },
    { 
      src: "/images/batch.jpg",
      caption: "Interactive learning sessions with local students"
    },
    { 
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      caption: "Celebrating achievements with our vision batch students"
    },
    { 
      src: "images/group.jpg",
      caption: "Providing free educational resources and materials"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % visionImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + visionImages.length) % visionImages.length)
  }

  const statistics = [
    { icon: Users, number: "500+", label: "Students Taught" },
    { icon: BookOpen, number: "1000+", label: "Hours of Free Education" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Heart, number: "50+", label: "Volunteers" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-40 -left-40 w-72 h-72 md:w-96 md:h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary-light) 0%, var(--color-secondary) 40%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-56 h-56 md:w-72 md:h-72 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary-light) 0%, var(--color-secondary) 40%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute -bottom-24 left-1/3 w-64 h-64 md:w-80 md:h-80 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary-light) 0%, var(--color-secondary) 35%, transparent 70%)'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-secondary/30 via-white to-secondary/30 text-primary backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-lg">
                The Vision Batch
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Empowering underprivileged students through free, quality education
              </p>
              <div className="mt-6 sm:mt-8 w-20 sm:w-24 h-1 bg-secondary mx-auto rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-12 border border-white/50">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-2xl mb-4 sm:mb-6 shadow-lg">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Education for All
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our Vision Batch was born from the belief that quality education should not be a privilege reserved for the few, 
                but a fundamental right accessible to all. We've dedicated ourselves to breaking down barriers and creating 
                opportunities for underprivileged students in our community.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our Journey in Pictures
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Witness the impact of our Vision Batch through these memorable moments
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/50">
              <div className="relative h-64 sm:h-80 md:h-[500px] w-auto">
                <img 
                  src={visionImages[currentImageIndex].src}
                  alt={visionImages[currentImageIndex].caption}
                  className="w-full h-full object-contain animate-float"
                />
                
                {/* Nav Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {visionImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-secondary scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm">
                <p className="text-center text-gray-700 font-medium text-sm sm:text-base">
                  {visionImages[currentImageIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="relative py-10 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-2xl mb-3 sm:mb-4 shadow-lg">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-800">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Vision
