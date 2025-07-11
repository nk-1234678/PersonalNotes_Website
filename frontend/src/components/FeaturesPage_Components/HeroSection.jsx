import React from 'react';
import { Brain, Cloud, Users, Shield, ArrowRight } from 'lucide-react';

export default function MinimalFeaturesHero() {
  const features = [
    {
      icon: Brain,
      title: "AI Organization",
      description: "Smart categorization that understands your content"
    },
    {
      icon: Cloud,
      title: "Real-time Sync",
      description: "Access your notes anywhere, changes sync instantly"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share notes and work together seamlessly"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption keeps your thoughts safe"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Features that 
            <span className="text-blue-400"> matter</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Simple, powerful tools to capture and organize your thoughts
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-700 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}