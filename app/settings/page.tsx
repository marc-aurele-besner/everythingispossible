'use client';

import { useState } from 'react';
import { Settings, Bell, Moon, Volume2, Save, Sparkles } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [nightMode, setNightMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [frequency, setFrequency] = useState('random');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-10 w-48 h-48 bg-[#8b5cf6]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-[#06d6a0]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="h-8 w-8 text-[#8b5cf6]" />
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              <span className="gradient-text">Settings</span>
            </h1>
          </div>
          <p className="text-[#a0a0a0] text-lg">
            Customize your absurd motivational experience.
          </p>
        </div>

        <div className="space-y-8">
          {/* Notification Settings */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-6 w-6 text-[#ff2d92]" />
              <h2 className="text-2xl font-bold text-white">Notification Preferences</h2>
            </div>

            <div className="space-y-6">
              {/* Enable Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-white font-semibold text-lg">Enable Notifications</label>
                  <p className="text-[#a0a0a0] text-sm">Receive absurd motivational slogans throughout your day</p>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`w-14 h-7 rounded-full transition-all duration-200 ${
                    notificationsEnabled 
                      ? 'bg-[#06d6a0]' 
                      : 'bg-[#2a2a2a]'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all duration-200 ${
                    notificationsEnabled ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Frequency */}
              <div className="space-y-3">
                <label className="text-white font-semibold text-lg">Notification Frequency</label>
                <p className="text-[#a0a0a0] text-sm">How often should we surprise you with wisdom?</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'low', label: 'Minimal', desc: '1-2 per day' },
                    { value: 'random', label: 'Random', desc: 'Surprise me!' },
                    { value: 'high', label: 'Maximum Chaos', desc: '8-10 per day' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFrequency(option.value)}
                      className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                        frequency === option.value
                          ? 'border-[#ff2d92] bg-[#ff2d92]/10 text-[#ff2d92]'
                          : 'border-[#2a2a2a] bg-[#0a0a0a] text-[#a0a0a0] hover:border-[#3a3a3a] hover:text-white'
                      }`}
                    >
                      <div className="font-semibold mb-1">{option.label}</div>
                      <div className="text-xs opacity-80">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Night Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-white font-semibold text-lg">Night Mode</label>
                  <p className="text-[#a0a0a0] text-sm">Pause notifications during sleeping hours (10 PM - 8 AM)</p>
                </div>
                <button
                  onClick={() => setNightMode(!nightMode)}
                  className={`w-14 h-7 rounded-full transition-all duration-200 ${
                    nightMode 
                      ? 'bg-[#8b5cf6]' 
                      : 'bg-[#2a2a2a]'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all duration-200 flex items-center justify-center ${
                    nightMode ? 'translate-x-8' : 'translate-x-1'
                  }`}>
                    {nightMode && <Moon className="h-3 w-3 text-[#8b5cf6]" />}
                  </div>
                </button>
              </div>

              {/* Sound */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-white font-semibold text-lg">Notification Sound</label>
                  <p className="text-[#a0a0a0] text-sm">Play a gentle chime with each notification</p>
                </div>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`w-14 h-7 rounded-full transition-all duration-200 ${
                    soundEnabled 
                      ? 'bg-[#06d6a0]' 
                      : 'bg-[#2a2a2a]'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all duration-200 flex items-center justify-center ${
                    soundEnabled ? 'translate-x-8' : 'translate-x-1'
                  }`}>
                    {soundEnabled && <Volume2 className="h-3 w-3 text-[#06d6a0]" />}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="h-6 w-6 text-[#ffd60a]" />
              <h2 className="text-2xl font-bold text-white">Appearance</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white font-semibold text-lg mb-3 block">Accent Color</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { color: '#ff2d92', name: 'Pink' },
                    { color: '#8b5cf6', name: 'Purple' },
                    { color: '#06d6a0', name: 'Teal' },
                    { color: '#ffd60a', name: 'Yellow' }
                  ].map((option) => (
                    <button
                      key={option.color}
                      className="w-full h-12 rounded-xl border-2 border-[#2a2a2a] hover:border-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                      style={{ backgroundColor: `${option.color}20` }}
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: option.color }}
                      />
                      <span className="text-white text-sm font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-[#1a1a1a] border border-[#ff2d92]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#ff2d92] mb-6">Danger Zone</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-white font-semibold text-lg">Clear Notification History</label>
                  <p className="text-[#a0a0a0] text-sm">Remove all past notifications and start fresh</p>
                </div>
                <button className="bg-[#ff2d92]/10 hover:bg-[#ff2d92]/20 border border-[#ff2d92]/30 text-[#ff2d92] font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                  Clear History
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-white font-semibold text-lg">Disable All Notifications</label>
                  <p className="text-[#a0a0a0] text-sm">Stop receiving notifications completely</p>
                </div>
                <button className="bg-[#ff2d92]/10 hover:bg-[#ff2d92]/20 border border-[#ff2d92]/30 text-[#ff2d92] font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                  Disable
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-gradient-to-r from-[#ff2d92] to-[#8b5cf6] hover:from-[#ff2d92]/90 hover:to-[#8b5cf6]/90 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:transform-none shadow-lg hover:shadow-2xl flex items-center space-x-3 glow-pink"
            >
              {isSaving ? (
                <>
                  <LoadingSpinner color="border-white" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-6 w-6" />
                  <span>Save Settings</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}