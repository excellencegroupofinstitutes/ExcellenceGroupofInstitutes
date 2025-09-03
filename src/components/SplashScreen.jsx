import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [logoScale, setLogoScale] = useState(0);

  useEffect(() => {
    // Logo entrance animation
    const scaleTimer = setTimeout(() => setLogoScale(1), 100);

    // Start fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);

    // Complete hide
    const hideTimer = setTimeout(() => onFinish(), 3000);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: `
          radial-gradient(circle at 30% 20%, var(--color-secondary-light) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, var(--color-secondary-light) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, var(--color-secondary-light) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-secondary-light)] rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[var(--color-secondary-light)] rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[var(--color-secondary-light)] rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[var(--color-secondary-light)] rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center">
        {/* Logo with smooth scale animation */}
        <div
          className="mb-6 transition-transform duration-700 ease-out"
          style={{ transform: `scale(${logoScale})` }}
        >
          <div className="relative">
            <img
              src="/images/logo.png"
              alt="Excellence Group of Institutes"
              className="h-24 w-24 object-contain mx-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* Institution name */}
        <div
          className={`transition-opacity duration-1000 delay-300 ${
            logoScale ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
            Excellence Group of Institutes
          </h1>
          <div className="w-32 h-1 bg-[var(--color-secondary)] mx-auto rounded-full"></div>
        </div>

        {/* Loading indicator */}
        <div
          className={`mt-8 transition-opacity duration-1000 delay-700 ${
            logoScale ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex justify-center items-center space-x-1">
            <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[var(--color-secondary-light)] rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--color-secondary-light)] rounded-tl-full"></div>
    </div>
  );
};

export default SplashScreen;
