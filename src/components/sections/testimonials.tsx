import React from 'react';
import { Quote, Star, Users, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "FlipFin caught the MOONBAG launch 45 seconds before anyone else. Made 12x in under 3 minutes. This platform is unreal.",
      author: "CryptoWolf",
      role: "Professional Trader",
      avatar: "CW",
      rating: 5
    },
    {
      quote: "I've tried every Solana terminal out there. FlipFin's execution speed and real-time analytics are in a completely different league.",
      author: "DeFiQueen",
      role: "Portfolio Manager",
      avatar: "DQ",
      rating: 5
    },
    {
      quote: "The social alpha features saved me from multiple rug pulls. The community insights are worth the price of admission alone.",
      author: "SafeHodler",
      role: "Risk Manager",
      avatar: "SH",
      rating: 5
    }
  ];

  const achievements = [
    { icon: <Users size={24} />, value: "15K+", label: "Active Traders" },
    { icon: <TrendingUp size={24} />, value: "$250M+", label: "Volume Tracked" },
    { icon: <Star size={24} />, value: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#05080a] to-[#0a1510] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-l border-[#121e1a] h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Trusted by <span className="text-[#10b981] cyber-glow">Professionals</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Join thousands of successful traders who rely on FlipFin for their Solana trading needs.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="cyber-card p-8 border border-[#121e1a] text-center group hover:border-[#10b981] transition-all duration-300">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-[#10b981]">{achievement.icon}</div>
                <div className="w-3 h-3 bg-[#10b981] rounded-full animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-white font-mono mb-2">{achievement.value}</div>
              <div className="text-sm text-[#94a3b8] font-mono uppercase tracking-wider">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="cyber-card relative p-8 border border-[#121e1a] group hover:border-[#10b981] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#10b981]/20 group-hover:text-[#10b981]/40 transition-colors">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#10b981] fill-[#10b981]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-[#94a3b8] leading-relaxed mb-8 text-sm italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#121e1a] border border-[#121e1a] flex items-center justify-center font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-xs text-[#94a3b8] font-mono uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/10 text-[#10b981] font-mono">
                  VERIFIED USER
                </span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#121e1a] rounded-full group-hover:bg-[#10b981] transition-colors"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join the Winners?
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Don't just take our word for it. Experience the difference that professional-grade 
                trading tools can make in your Solana trading journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://flipfin.fun/"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10b981] to-emerald-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <span>Start Trading Now</span>
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                    <TrendingUp size={16} className="text-[#10b981] group-hover:text-black transition-colors" />
                  </div>
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#121e1a] text-white font-bold text-lg rounded-xl hover:border-[#10b981] hover:bg-[#121e1a] transition-all duration-300"
                >
                  <span>Learn How It Works</span>
                  <div className="w-6 h-6 rounded-full border border-[#121e1a] flex items-center justify-center hover:border-[#10b981] transition-colors">
                    <Quote size={16} className="text-[#94a3b8] hover:text-[#10b981] transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;