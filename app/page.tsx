"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, Music, MessageCircle, Sprout, Calendar, MapPin, Star, Sun, Smile, Users, Shield, Bird, Gift, Zap, Award, Coffee, Book, Film, PartyPopper } from 'lucide-react';

const ValentineInvitation = () => {
  const [currentSection, setCurrentSection] = useState<'landing' | 'story' | 'reasons' | 'gallery' | 'question' | 'celebration'>('landing');
  const [showConfetti, setShowConfetti] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const ourStory = [
    {
      title: "First Chat",
      date: "Where It Began",
      description: "A simple question about our IT Living subject brought us together. You were from a different section, just someone new to talk to. I never imagined that this ordinary chat would become the beginning of my greatest love story.",
      icon: MessageCircle
    },
    {
      title: "How We Met",
      date: "The Beginning",
      description: "At first, I didn't notice you - you were just another face in the crowd. But by our 3rd year in college, something changed in me. Suddenly, I found myself caring deeply about you. Sometimes the best love stories start when you least expect them.",
      icon: Sparkles
    },
    {
      title: "First Date",
      date: "Magical",
      description: "I was so nervous, but the moment I saw your smile, everything felt right. That day will forever hold a special place in my heart.",
      icon: Calendar
    },
    {
      title: "Growing Together",
      date: "Our Journey",
      description: "Every day with you is an adventure. We've laughed together, grown together, and built something truly special. You've become my best friend, my safe place, my home.",
      icon: Sprout
    }
  ];

  const reasons = [
    { text: "Your smile lights up my entire world", icon: Star },
    { text: "You make my worst days better just by being there", icon: Heart },
    { text: "Your kindness and compassion inspire me every day", icon: Sparkles },
    { text: "You believe in me even when I doubt myself", icon: Award },
    { text: "Your laugh is my favorite sound in the universe", icon: Smile },
    { text: "You understand me in ways no one else ever has", icon: Users },
    { text: "You're my peace in the chaos of life", icon: Bird },
    { text: "Every moment with you feels like a gift", icon: Gift },
    { text: "You make ordinary days extraordinary", icon: Zap },
    { text: "You are my happiness, my comfort, my everything", icon: Heart }
  ];

  const photos = [
    { caption: "First Selfie/Picture", image: "/images/first-selfie.jpg", date: "May 18, 2025" },
    { caption: "First visit to your house", image: "/images/first-visit.jpg", date: "August 09, 2025" },
    { caption: "First Monthsary", image: "/images/first-monthsary.jpg", date: "September 05, 2025" },
    { caption: "Playing Dampa", image: "/images/playing-dampa.png", date: "October 14, 2025" },
    { caption: "Acquaintance Party", image: "/images/acquaintance.jpg", date: "November 11, 2025" },
    { caption: "Padagat", image: "/images/padagat.jpg", date: "December 10, 2025" },
    { caption: "Tops", image: "/images/tops.jpg", date: "December 22, 2025" },
    { caption: "Christmas", image: "/images/christmas.jpg", date: "December 25, 2025" },
    { caption: "New Year ", image: "/images/new-year.jpg", date: "January 01, 2026" }

  ];

  const ConfettiEffect = () => {
    const [mounted, setMounted] = useState(false);
    const confettiIcons = [Heart, Star, Sparkles, Gift];

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {[...Array(50)].map((_, i) => {
          const IconComponent = confettiIcons[Math.floor(Math.random() * confettiIcons.length)];
          return (
            <div
              key={i}
              className="absolute animate-fall text-rose-400"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                top: '-50px'
              }}
            >
              <IconComponent className="w-6 h-6" />
            </div>
          );
        })}
      </div>
    );
  };

  const FloatingHearts = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-rose-300 fill-rose-200" />
          </div>
        ))}
      </div>
    );
  };
  const LandingSection = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,182,193,0.4),transparent_50%)]"></div>
      <FloatingHearts />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl animate-fadeIn">
        <div className="mb-6 sm:mb-8 animate-bounce-slow">
          <Heart className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-rose-400 fill-rose-300" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-rose-600 animate-slideDown"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Hi, My Love
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-rose-700 mb-8 sm:mb-12 leading-relaxed animate-slideUp px-2"
          style={{ fontFamily: "'Crimson Text', serif", animationDelay: '0.2s' }}>
          I made something special for you... before this day ends, I just want to ask you something from my heart.
        </p>

        <button
          onClick={() => setCurrentSection('story')}
          className="group px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-white bg-rose-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-rose-600 animate-pulse-soft"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="flex items-center gap-2 sm:gap-3">
            Click Me
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );

  const StorySection = () => (
    <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50"></div>
      <FloatingHearts />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-3 sm:mb-4 text-rose-600 animate-fadeIn px-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Beautiful Story
        </h2>
        <p className="text-center text-rose-500 mb-10 sm:mb-16 text-base sm:text-lg animate-fadeIn px-2" style={{ animationDelay: '0.2s' }}>
          A journey I cherish with all my heart
        </p>

        <div className="space-y-6 sm:space-y-8">
          {ourStory.map((moment, index) => {
            const IconComponent = moment.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slideUp border border-rose-100"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-rose-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-rose-600 mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {moment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-rose-400 mb-2 sm:mb-3 font-semibold">{moment.date}</p>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => setCurrentSection('reasons')}
            className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-rose-500 rounded-full hover:scale-105 hover:bg-rose-600 transition-transform shadow-lg flex items-center gap-2 mx-auto"
          >
            Continue Reading
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const ReasonsSection = () => (
    <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100"></div>
      <FloatingHearts />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-3 sm:mb-4 text-rose-600 animate-fadeIn px-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Why I Love You
        </h2>
        <p className="text-center text-rose-500 mb-10 sm:mb-16 text-base sm:text-lg animate-fadeIn px-2" style={{ animationDelay: '0.2s' }}>
          There are countless reasons, but here are just a few...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-rose-50 animate-fadeIn group border border-rose-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 mt-1 group-hover:scale-125 transition-transform flex-shrink-0" />
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => setCurrentSection('gallery')}
            className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-rose-500 rounded-full hover:scale-105 hover:bg-rose-600 transition-transform shadow-lg flex items-center gap-2 mx-auto"
          >
            Our Beautiful Memories
            <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const GallerySection = () => (
    <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50"></div>
      <FloatingHearts />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-3 sm:mb-4 text-rose-600 animate-fadeIn px-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Precious Moments
        </h2>
        <p className="text-center text-rose-500 mb-10 sm:mb-16 text-base sm:text-lg animate-fadeIn px-2" style={{ animationDelay: '0.2s' }}>
          Every picture tells our beautiful story
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 sm:border-4 border-white">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-gray-700 font-semibold text-base sm:text-lg">
                  {photo.caption}
                </p>
                <p className="text-rose-400 text-xs sm:text-sm mt-1">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => setCurrentSection('question')}
            className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-rose-500 rounded-full hover:scale-105 hover:bg-rose-600 transition-transform shadow-lg flex items-center gap-2 mx-auto"
          >
            There's One More Thing...
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const QuestionSection = () => {
    const noButtonTexts = [
      "No",
      "Are you sure?",
      "Really?",
      "Think again...",
      "Please?",
      "One more chance?"
    ];

    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100"></div>
        <FloatingHearts />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <div className="mb-8 sm:mb-12 animate-pulse-slow">
            <Heart className="w-24 h-24 sm:w-32 sm:h-32 mx-auto text-rose-400 fill-rose-300" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-rose-600 animate-fadeIn px-2"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Will You Be My Valentine?
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-rose-700 mb-10 sm:mb-16 leading-relaxed animate-fadeIn px-2"
            style={{ fontFamily: "'Crimson Text', serif", animationDelay: '0.2s' }}>
            You mean the world to me. I want to make this Valentine's Day unforgettable for us.
          </p>

          <div className="flex gap-4 sm:gap-6 justify-center items-center flex-wrap px-2">
            <button
              onClick={() => {
                setCurrentSection('celebration');
                setShowConfetti(true);
              }}
              className="group px-10 sm:px-16 py-4 sm:py-6 text-xl sm:text-2xl font-bold text-white bg-rose-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-rose-600"
            >
              <span className="flex items-center gap-2 sm:gap-3">
                Yes!
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-125 transition-transform fill-white" />
              </span>
            </button>

            <button
              onClick={() => setNoClickCount(prev => prev + 1)}
              className="px-10 sm:px-12 py-4 sm:py-6 text-xl sm:text-xl font-semibold text-rose-600 bg-white rounded-full hover:bg-rose-50 transition-all duration-300 border-2 border-rose-300 hover:scale-95"
              style={{
                fontSize: noClickCount > 0 ? `${Math.max(14, 20 - noClickCount * 2)}px` : undefined,
                padding: noClickCount > 0 ? `${Math.max(12, 24 - noClickCount * 2)}px ${Math.max(20, 48 - noClickCount * 4)}px` : undefined
              }}
            >
              {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
            </button>
          </div>

          {noClickCount > 0 && (
            <p className="mt-6 sm:mt-8 text-rose-600 font-semibold animate-fadeIn text-base sm:text-lg px-2">
              {noClickCount === 1 && "Come on... you know you want to say yes!"}
              {noClickCount === 2 && "I'll make it the best Valentine's Day ever!"}
              {noClickCount === 3 && "Pretty please with a cherry on top?"}
              {noClickCount >= 4 && "My heart is waiting for your 'Yes'..."}
            </p>
          )}
        </div>
      </div>
    );
  };

  const CelebrationSection = () => {
    const [daysUntil, setDaysUntil] = useState(0);

    useEffect(() => {
      const calculateDays = () => {
        const now = new Date();
        const valentine = new Date(now.getFullYear(), 1, 14);
        if (now > valentine) {
          valentine.setFullYear(valentine.getFullYear() + 1);
        }
        const diffTime = valentine.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysUntil(diffDays);
      };

      calculateDays();
      const interval = setInterval(calculateDays, 1000 * 60 * 60);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="min-h-screen py-12 sm:py-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100"></div>
        {showConfetti && <ConfettiEffect />}
        <FloatingHearts />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
          <div className="mb-8 sm:mb-12 animate-bounce-slow">
            <PartyPopper className="w-24 h-24 sm:w-32 sm:h-32 mx-auto text-rose-500" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-rose-600 animate-fadeIn px-2"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            You Just Made Me The Happiest Person!
          </h1>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl mb-8 sm:mb-12 animate-slideUp border border-rose-200">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
              style={{ fontFamily: "'Crimson Text', serif" }}>
              Thank you for saying yes! You have no idea how much this means to me. I promise to make this Valentine's Day absolutely magical for us. Every moment we share is precious to me, and I can't wait to create more beautiful memories together.
            </p>
            <p className="text-base sm:text-lg text-rose-600 font-semibold flex items-center justify-center gap-2 flex-wrap">
              I love you more than words can express. You are my everything.
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-rose-600" />
            </p>
          </div>

          {daysUntil > 0 && (
            <div className="bg-rose-500 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl animate-fadeIn mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center justify-center gap-2 flex-wrap">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
                Countdown to Valentine's Day
              </p>
              <p className="text-5xl sm:text-6xl font-bold">{daysUntil}</p>
              <p className="text-lg sm:text-xl mt-2">
                {daysUntil === 1 ? 'day' : 'days'} until our special day!
              </p>
            </div>
          )}

          {daysUntil === 0 && (
            <div className="bg-rose-500 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl animate-pulse-soft mb-8 sm:mb-12">
              <p className="text-2xl sm:text-4xl font-bold flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                Happy Valentine's Day, My Love!
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
              </p>
            </div>
          )}

          <button
            onClick={() => setCurrentSection('landing')}
            className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-rose-600 bg-white rounded-full hover:bg-rose-50 transition-all duration-300 border-2 border-rose-300 shadow-lg flex items-center gap-2 mx-auto"
          >
            Relive This Moment
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.02);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fall {
          animation: fall linear forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
      `}</style>

      {currentSection === 'landing' && <LandingSection />}
      {currentSection === 'story' && <StorySection />}
      {currentSection === 'reasons' && <ReasonsSection />}
      {currentSection === 'gallery' && <GallerySection />}
      {currentSection === 'question' && <QuestionSection />}
      {currentSection === 'celebration' && <CelebrationSection />}
    </div>
  );
};

export default ValentineInvitation;