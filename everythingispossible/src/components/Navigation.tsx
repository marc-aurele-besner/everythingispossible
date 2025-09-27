'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Home, Sparkles } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-[#ff2d92] group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 blur-md bg-[#ff2d92] opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              EverythingIsPossible
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/')
                  ? 'bg-[#ff2d92]/20 text-[#ff2d92] glow-pink'
                  : 'text-[#ededed] hover:text-[#ff2d92] hover:bg-[#1a1a1a]'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="hidden sm:block">Home</span>
            </Link>

            <Link
              href="/dashboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/dashboard')
                  ? 'bg-[#8b5cf6]/20 text-[#8b5cf6] glow-purple'
                  : 'text-[#ededed] hover:text-[#8b5cf6] hover:bg-[#1a1a1a]'
              }`}
            >
              <Bell className="h-5 w-5" />
              <span className="hidden sm:block">Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}