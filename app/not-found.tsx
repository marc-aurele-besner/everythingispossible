import Link from 'next/link';
import { Sparkles, ArrowLeft, Zap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-48 h-48 bg-[#ff2d92]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="h-24 w-24 text-[#ff2d92] animate-pulse-glow" />
            <div className="absolute inset-0 blur-xl bg-[#ff2d92] opacity-30"></div>
          </div>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black mb-6">
          <span className="gradient-text">404</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Page Lost in the Void
        </h2>

        <p className="text-xl text-[#a0a0a0] mb-12 leading-relaxed">
          This page has transcended reality and become one with the universe.
          <br />
          <span className="text-[#8b5cf6] font-semibold">Don't worry, everything is still possible!</span>
        </p>

        {/* Absurd 404 Slogan */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 mb-12 hover:border-[#ff2d92]/30 transition-all duration-300">
          <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
            "Navigate the impossible, it's surprisingly well-lit."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#ff2d92] to-[#8b5cf6] hover:from-[#ff2d92]/90 hover:to-[#8b5cf6]/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl glow-pink"
          >
            <ArrowLeft className="h-6 w-6" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center space-x-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] hover:border-[#8b5cf6]/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
          >
            <span>View Dashboard</span>
            <Zap className="h-6 w-6 text-[#8b5cf6]" />
          </Link>
        </div>
      </div>
    </div>
  );
}