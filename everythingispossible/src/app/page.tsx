'use client';

import { useState } from 'react';
import { Bell, Sparkles, Zap, Moon, Heart, Star } from 'lucide-react';
import { getRandomSlogan } from '@/lib/mockData';

export default function Home() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState("Eat the moon, it's vegan.");

  const handleEnableNotifications = async () => {
    setIsLoading(true);
    
    // Simulate enabling notifications
    setTimeout(() => {
      setNotificationsEnabled(true);
      setIsLoading(false);
      // Generate a new random slogan to show
      setCurrentSlogan(getRandomSlogan().text);
    }, 1500);
  };

  const generateNewSlogan = () => {
    setCurrentSlogan(getRandomSlogan().text);
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff2d92]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-[#06d6a0]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-[#ffd60a]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16 lg:py-24">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Sparkles className="h-20 w-20 text-[#ff2d92] animate-pulse-glow" />
              <div className="absolute inset-0 blur-xl bg-[#ff2d92] opacity-30"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Everything</span>
            <br />
            <span className="text-white">Is</span>
            <br />
            <span className="gradient-text">Possible</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#a0a0a0] mb-12 max-w-3xl mx-auto leading-relaxed">
            Get surprised by hilariously absurd motivational slogans delivered straight to your notifications.
            <br />
            <span className="text-[#ff2d92] font-semibold">Because everything is possible, even eating the moon.</span>
          </p>

          {/* Current Slogan Display */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#ff2d92]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff2d92]/5 via-[#8b5cf6]/5 to-[#06d6a0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#ffd60a] mr-2" />
                  <span className="text-sm font-semibold text-[#ffd60a] uppercase tracking-wide">Today's Inspiration</span>
                  <Star className="h-6 w-6 text-[#ffd60a] ml-2" />
                </div>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
                  "{currentSlogan}"
                </blockquote>
                <button
                  onClick={generateNewSlogan}
                  className="mt-6 text-[#06d6a0] hover:text-[#06d6a0]/80 transition-colors duration-200 text-sm font-medium underline"
                >
                  Generate another →
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-md mx-auto">
            {!notificationsEnabled ? (
              <button
                onClick={handleEnableNotifications}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#ff2d92] to-[#8b5cf6] hover:from-[#ff2d92]/90 hover:to-[#8b5cf6]/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:transform-none shadow-lg hover:shadow-2xl flex items-center justify-center space-x-3 glow-pink"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Enabling magic...</span>
                  </>
                ) : (
                  <>
                    <Bell className="h-6 w-6" />
                    <span>Enable Notifications</span>
                  </>
                )}
              </button>
            ) : (
              <div className="text-center">
                <div className="bg-[#06d6a0]/10 border border-[#06d6a0]/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-[#06d6a0] rounded-full p-2 mr-3">
                      <Bell className="h-6 w-6 text-[#0a0a0a]" />
                    </div>
                    <span className="text-[#06d6a0] font-bold text-lg">Notifications Enabled!</span>
                  </div>
                  <p className="text-[#a0a0a0]">
                    You'll start receiving absurd motivational slogans throughout your day.
                  </p>
                </div>
                <a
                  href="/dashboard"
                  className="inline-flex items-center space-x-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] hover:border-[#8b5cf6]/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                >
                  <span>View Dashboard</span>
                  <Zap className="h-5 w-5 text-[#8b5cf6]" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Why Choose Absurdity?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#ff2d92]/30 hover:bg-[#1a1a1a]/80">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff2d92]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-8 w-8 text-[#ff2d92]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Unexpected Joy</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Random notifications that surprise and delight you throughout your day with absurd wisdom.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#1a1a1a]/80">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8b5cf6]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Moon className="h-8 w-8 text-[#8b5cf6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Surreal Wisdom</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  AI-generated slogans that make no sense but somehow make perfect sense for your soul.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#06d6a0]/30 hover:bg-[#1a1a1a]/80">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#06d6a0]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-[#06d6a0]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Mood Boosting</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Lighthearted nudges that shift your perspective and brighten even the gloomiest moments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Slogans */}
        <div className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Sample Slogans</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Drink gravity, it's zero calories.",
              "Trust your socks, they know the way.",
              "Reality is optional; vibes are forever.",
              "Hug a cloud, it needs emotional support.",
              "Whisper secrets to your WiFi router.",
              "Negotiate with gravity, demand better terms."
            ].map((slogan, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#ff2d92]/20 transition-all duration-300 group">
                <p className="text-white font-medium text-lg leading-relaxed group-hover:text-[#ff2d92] transition-colors duration-300">
                  "{slogan}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}