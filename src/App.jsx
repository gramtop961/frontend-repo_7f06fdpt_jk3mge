import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <CTA />
    </div>
  );
}
