import { Sparkles, Target, Users, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-[#06d6a0]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ff2d92]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-[#ff2d92] animate-pulse-glow" />
              <div className="absolute inset-0 blur-xl bg-[#ff2d92] opacity-30"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black mb-6">
            <span className="gradient-text">About</span> <span className="text-white">Our</span> <span className="gradient-text">Mission</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#a0a0a0] max-w-4xl mx-auto leading-relaxed">
            We believe the world needs more absurd wisdom and unexpected joy.
            <br />
            <span className="text-[#8b5cf6] font-semibold">So we built an AI that thinks outside reality itself.</span>
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 lg:p-12 hover:border-[#ff2d92]/20 transition-all duration-300">
            <div className="text-center">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
                "In a world full of ordinary motivation, we chose to befriend the impossible."
              </blockquote>
              <cite className="text-[#8b5cf6] font-semibold text-lg">— The EverythingIsPossible Team</cite>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Our Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#ff2d92]/30">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ff2d92]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-7 w-7 text-[#ff2d92]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Intentional Absurdity</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  Every slogan is carefully crafted to be meaningless yet meaningful.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#8b5cf6]/30">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#8b5cf6]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-[#8b5cf6]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Human Connection</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  Bringing people together through shared bewilderment and laughter.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#06d6a0]/30">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#06d6a0]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-7 w-7 text-[#06d6a0]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Creative Thinking</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  Challenging conventional wisdom one ridiculous idea at a time.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#ffd60a]/30">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ffd60a]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-7 w-7 text-[#ffd60a]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Boundless Possibility</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  If you can imagine it, the universe probably agrees it's valid.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">How It Started</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 lg:p-12">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                  It began with a simple question: <span className="text-[#ff2d92] font-semibold">"What if motivational quotes made absolutely no sense?"</span>
                </p>
                
                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                  Traditional motivation felt too... traditional. Too grounded in reality. Too concerned with actually making sense. 
                  We wanted something that would make people pause, laugh, and somehow feel inspired by the sheer audacity of nonsense.
                </p>

                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                  So we trained an AI to think like a surrealist poet having a philosophical debate with a fortune cookie. 
                  The result? <span className="text-[#8b5cf6] font-semibold">Pure, distilled, motivational chaos.</span>
                </p>

                <p className="text-[#a0a0a0] leading-relaxed">
                  Because sometimes, the best way to inspire someone is to remind them that 
                  <span className="text-[#06d6a0] font-semibold"> reality is just a suggestion, and everything truly is possible.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="gradient-text">Built With Love & Chaos</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-[#a0a0a0]">
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded-lg hover:border-[#ff2d92]/20 transition-colors">Next.js</span>
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded-lg hover:border-[#8b5cf6]/20 transition-colors">TypeScript</span>
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded-lg hover:border-[#06d6a0]/20 transition-colors">TailwindCSS</span>
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded-lg hover:border-[#ffd60a]/20 transition-colors">OpenAI API</span>
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded-lg hover:border-[#ff2d92]/20 transition-colors">Vercel</span>
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded-lg hover:border-[#8b5cf6]/20 transition-colors">Neon Database</span>
          </div>
        </div>
      </div>
    </div>
  );
}