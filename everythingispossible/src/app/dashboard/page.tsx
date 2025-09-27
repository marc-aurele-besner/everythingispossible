'use client';

import { useState } from 'react';
import { Bell, Sparkles, Clock, Heart, Refresh, Star, Zap, Eye, EyeOff } from 'lucide-react';
import { mockNotificationHistory, mockSlogans, getRandomSlogan, formatTimeAgo } from '@/lib/mockData';

export default function Dashboard() {
  const [notifications, setNotifications] = useState(mockNotificationHistory);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<string | null>(null);

  const handleGenerateSlogan = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const newSlogan = getRandomSlogan();
      setLastGenerated(newSlogan.text);
      setIsGenerating(false);
    }, 1500);
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, read: true }
          : notif
      )
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const recentSlogans = mockSlogans.slice(0, 6);

  return (
    <div className="min-h-screen pt-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-10 w-48 h-48 bg-[#8b5cf6]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-[#06d6a0]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <Bell className="h-8 w-8 text-[#8b5cf6]" />
              {unreadCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-[#ff2d92] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {unreadCount}
                </div>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Your <span className="gradient-text">Dashboard</span>
            </h1>
          </div>
          <p className="text-[#a0a0a0] text-lg">
            Manage your absurd motivational journey and explore past inspirations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Generate New Slogan */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="h-6 w-6 text-[#ff2d92]" />
                <h2 className="text-2xl font-bold text-white">Generate New Slogan</h2>
              </div>
              
              {lastGenerated && (
                <div className="mb-6 p-6 bg-[#0a0a0a] border border-[#ff2d92]/20 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-[#ffd60a]" />
                    <span className="text-sm font-semibold text-[#ffd60a] uppercase tracking-wide">Fresh from the AI</span>
                  </div>
                  <p className="text-xl font-bold text-white leading-relaxed">
                    "{lastGenerated}"
                  </p>
                </div>
              )}

              <button
                onClick={handleGenerateSlogan}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-[#ff2d92] to-[#8b5cf6] hover:from-[#ff2d92]/90 hover:to-[#8b5cf6]/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:transform-none shadow-lg hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Conjuring wisdom...</span>
                  </>
                ) : (
                  <>
                    <Refresh className="h-6 w-6" />
                    <span>Generate New Slogan</span>
                  </>
                )}
              </button>
            </div>

            {/* Notification History */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-[#06d6a0]" />
                  <h2 className="text-2xl font-bold text-white">Notification History</h2>
                </div>
                <div className="text-sm text-[#a0a0a0]">
                  {unreadCount} unread
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer group ${
                      notification.read
                        ? 'bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#3a3a3a]'
                        : 'bg-[#ff2d92]/5 border-[#ff2d92]/20 hover:border-[#ff2d92]/30'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          {notification.read ? (
                            <Eye className="h-4 w-4 text-[#a0a0a0]" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-[#ff2d92]" />
                          )}
                          <span className="text-sm text-[#a0a0a0]">
                            {formatTimeAgo(notification.dispatchedAt)}
                          </span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-[#ff2d92] rounded-full"></div>
                          )}
                        </div>
                        <p className={`text-lg leading-relaxed ${
                          notification.read ? 'text-[#a0a0a0]' : 'text-white font-medium'
                        }`}>
                          "{notification.slogan}"
                        </p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 ml-4 p-2 hover:bg-[#2a2a2a] rounded-lg transition-all duration-200">
                        <Heart className="h-4 w-4 text-[#ff2d92]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0]">Total Received</span>
                  <span className="text-2xl font-bold text-[#ff2d92]">{notifications.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0]">Unread</span>
                  <span className="text-2xl font-bold text-[#8b5cf6]">{unreadCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0]">Days Active</span>
                  <span className="text-2xl font-bold text-[#06d6a0]">7</span>
                </div>
              </div>
            </div>

            {/* Recent Slogans */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="h-5 w-5 text-[#ffd60a]" />
                <h3 className="text-xl font-bold text-white">Recent Slogans</h3>
              </div>
              <div className="space-y-3">
                {recentSlogans.map((slogan, index) => (
                  <div key={slogan.id} className="p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] hover:border-[#ff2d92]/20 transition-all duration-200 group cursor-pointer">
                    <p className="text-sm text-[#a0a0a0] group-hover:text-white transition-colors duration-200">
                      "{slogan.text}"
                    </p>
                    <div className="mt-2 text-xs text-[#666] flex items-center space-x-2">
                      <Clock className="h-3 w-3" />
                      <span>{formatTimeAgo(slogan.createdAt)}</span>
                      {slogan.isNew && (
                        <span className="bg-[#ff2d92] text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0]">Notifications</span>
                  <div className="w-12 h-6 bg-[#06d6a0] rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0]">Frequency</span>
                  <span className="text-white font-medium">Random</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0]">Night Mode</span>
                  <div className="w-12 h-6 bg-[#2a2a2a] rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}