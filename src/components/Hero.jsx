import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, Shield, Bell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft glow overlay that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <Mic className="h-3.5 w-3.5" /> Voice-driven healthcare assistant
        </span>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-purple-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-tight">
          Virtual Nurse AI
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
          A human-like assistant for real-time monitoring, medication reminders, emergency handling, and secure, hands-free conversations — available in multiple languages.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#features" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow/50 shadow-purple-500/10 transition hover:shadow-lg">
            Explore features
            <Shield className="h-4 w-4 transition group-hover:scale-110" />
          </a>
          <a href="#alerts" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            See emergency flow
            <Bell className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Real-time monitoring', value: '24/7' },
            { label: 'Languages', value: '10+' },
            { label: 'Avg. response', value: '< 1s' },
            { label: 'Uptime', value: '99.9%' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
              <div className="text-xs uppercase tracking-wide text-white/60">{item.label}</div>
              <div className="mt-1 text-xl font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
