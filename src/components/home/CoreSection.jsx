import React from "react";
import FancyButton from "../FancyButton"
import { useNavigate } from "react-router-dom";

const CoreSection = () => {
  const navigate = useNavigate();

  return (
    <section className="text-black py-16 relative overflow-hidden">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Organic texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-16 relative z-10">
        
        {/* Tuition Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src="/images/coretuition.png"
              alt="tuition"
              className="w-full max-w-[600px] h-auto max-h-[600px] object-cover"
            />
            {/* Floating geometric shapes */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-200 rounded-lg opacity-40"></div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Section background with texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl -m-8 -z-10"></div>
            <h2 className="text-3xl font-bold mb-4">Tuition</h2>
            <p className="text-lg mt-2 leading-relaxed">
              At Excellence Tuitions, we believe that learning should be about gaining conceptual knowledge, not just memorizing facts. We use innovative teaching methods that make complex topics easy to grasp, ensuring you can apply what you learn.
            </p>
            <div className="mt-5">
              <FancyButton navigation = {()=>{navigate('/tuition')}}>Read More</FancyButton>
            </div>
          </div>
        </div>

        {/* Web Service Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2 relative">
            {/* Section background with different texture */}
            <div className="absolute inset-0 bg-gradient-to-bl from-green-50/30 to-teal-50/30 rounded-3xl -m-8 -z-10"></div>
            <h2 className="text-3xl font-bold mb-4">Web Services</h2>
            <p className="text-lg mt-2 leading-relaxed">
              From stunning websites to robust e-commerce platforms and effective digital marketing strategies, we don’t just create solutions — we build lasting partnerships. With us, you gain the peace of mind that comes from working with true professionals.
            </p>
            <div className="mt-5">
              <FancyButton navigation = {()=>{navigate('/web-services')}}>Read More</FancyButton>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/corecomputer.png"
              alt="web services"
              className="w-full max-w-[600px] h-auto max-h-[600px] object-cover "
            />
            {/* Different floating shapes */}
            <div className="absolute -top-6 -left-4 w-10 h-10 bg-green-200 rounded-lg opacity-50 rotate-45"></div>
            <div className="absolute -bottom-4 -right-6 w-6 h-6 bg-teal-200 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Computer Center Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src="/images/tuition-blob.png"
              alt="computer center"
              className="w-full max-w-[600px] h-auto max-h-[600px] object-cover"
            />
            {/* Tech-themed shapes */}
            <div className="absolute -top-3 -right-3 w-4 h-4 bg-orange-200 opacity-60" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-red-200 opacity-50" style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}}></div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Tech-themed background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/30 to-red-50/30 rounded-3xl -m-8 -z-10"></div>
            <h2 className="text-3xl font-bold mb-4">Computer Center</h2>
            <p className="text-lg mt-2 leading-relaxed">
              Our courses go far beyond simple theory. We immerse you in real-world, industry-demanding projectsfrom day one. Instead of just memorizing concepts from a book, you'll be coding, designing, and troubleshooting, gaining the essential practical knowledge that employers are looking for.
            </p>
            <div className="mt-5">
              <FancyButton navigation = {()=>{navigate('/computer-services')}}>Read More</FancyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSection;