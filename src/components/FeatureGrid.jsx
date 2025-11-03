import React from 'react';
import { Mic, Pill, Activity, Shield, Bell, Globe, AlertTriangle, Heart } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice Understanding',
    desc: 'Whisper-powered speech-to-text with intent detection for natural commands and questions.'
  },
  {
    icon: Pill,
    title: 'Medicine Reminders',
    desc: 'Schedules voice and push reminders to keep treatments on track with acknowledgements.'
  },
  {
    icon: Activity,
    title: 'Health Monitoring',
    desc: 'Cough and fall detection plus vitals-driven risk scoring to flag potential issues early.'
  },
  {
    icon: Shield,
    title: 'Role-based Access',
    desc: 'Secure permissions for doctors, caretakers, and patients with privacy by design.'
  },
  {
    icon: Bell,
    title: 'Emergency Alerts',
    desc: 'Hands-free “help” triggers notifications and smart escalation if not acknowledged.'
  },
  {
    icon: Globe,
    title: 'Multilingual',
    desc: 'Understands and speaks multiple languages for inclusive, global access.'
  },
  {
    icon: Heart,
    title: 'Mood Detection',
    desc: 'Analyzes tone and pace to infer emotional state and promote well-being.'
  },
  {
    icon: AlertTriangle,
    title: 'Context Memory',
    desc: 'Short-term memory preserves conversation context for more human-like dialogue.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          Built for proactive, human-like care
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          From voice-first control to real-time alerts, every capability is designed to support patients and empower care teams.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5 transition hover:border-white/20">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
