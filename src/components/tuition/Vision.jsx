import React, { useState } from 'react'
import { Heart, BookOpen, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const Vision = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Placeholder images - replace with your actual photos
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
      {/* Background Radial Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fewer, softer radials */}
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary-light) 0%, var(--color-secondary) 40%, transparent 70%)',
            animationDuration: '4s'
          }}
        ></div>

        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary-light) 0%, var(--color-secondary) 40%, transparent 70%)',
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        ></div>

        <div 
          className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary-light) 0%, var(--color-secondary) 35%, transparent 70%)',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-white to-secondary/30 text-primary backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-lg">
                The Vision Batch
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                Empowering underprivileged students through free, quality education
              </p>
              {/* Yellow underline for consistency */}
              <div className="mt-8 w-24 h-1 bg-secondary mx-auto rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-6xl mx-auto px-6 py-16 relative">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Education for All
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our Vision Batch was born from the belief that quality education should not be a privilege reserved for the few, 
                but a fundamental right accessible to all. We've dedicated ourselves to breaking down barriers and creating 
                opportunities for underprivileged students in our community.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="max-w-6xl mx-auto px-6 pb-16 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey in Pictures</h2>
            <p className="text-lg text-gray-600">Witness the impact of our Vision Batch through these memorable moments</p>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50">
              <div className="relative h-96 md:h-[500px] w-auto">
                <img 
                  src={visionImages[currentImageIndex].src}
                  alt={visionImages[currentImageIndex].caption}
                  className="w-full h-full object-contain animate-float"
                />
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {visionImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-secondary scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm">
                <p className="text-center text-gray-700 font-medium text-lg">
                  {visionImages[currentImageIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="relative py-16">
          <div className="max-w-6xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-gray-800">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Vision
