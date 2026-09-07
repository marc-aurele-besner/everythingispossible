import Link from 'next/link';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#ff2d92]" />
              <span className="text-lg font-bold gradient-text">EverythingIsPossible</span>
            </div>
            <p className="text-[#a0a0a0] leading-relaxed">
              Delivering absurd motivational wisdom to brighten your day, one impossible slogan at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-[#a0a0a0] hover:text-[#ff2d92] transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="block text-[#a0a0a0] hover:text-[#8b5cf6] transition-colors">
                Dashboard
              </Link>
              <Link href="/about" className="block text-[#a0a0a0] hover:text-[#06d6a0] transition-colors">
                About
              </Link>
              <Link href="/settings" className="block text-[#a0a0a0] hover:text-[#ffd60a] transition-colors">
                Settings
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="mailto:hello@everythingispossible.app" className="block text-[#a0a0a0] hover:text-[#ff2d92] transition-colors">
                Email Us
              </a>
              <a href="https://twitter.com/everythingispossible" className="block text-[#a0a0a0] hover:text-[#8b5cf6] transition-colors">
                Twitter
              </a>
              <a href="https://github.com/everythingispossible" className="block text-[#a0a0a0] hover:text-[#06d6a0] transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#666] text-sm">
              © 2024 EverythingIsPossible. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-[#666] text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#ff2d92]" />
              <span>and a healthy disregard for logic</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}