import React from 'react';
import { Mic, Brain, Bell, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Listen',
    icon: Mic,
    items: [
      'Hands-free wake words or push-to-talk',
      'Studio-grade transcription (Whisper)',
      'Speaker identification for roles'
    ]
  },
  {
    title: 'Understand',
    icon: Brain,
    items: [
      'Intent detection and context memory',
      'Health ML: cough, fall, mood',
      'Risk prediction from vitals'
    ]
  },
  {
    title: 'Act',
    icon: Bell,
    items: [
      'Natural voice replies (TTS)',
      'Medicine reminders and scheduling',
      'Emergency alerts with escalation'
    ]
  }
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A simple three-stage loop powers a seamless, human-like experience.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-white/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {idx < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-white/15 md:block" />
              )}
            </div>
          ))}
        </div>

        <div id="alerts" className="mt-10 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6">
          <div className="flex items-center gap-3 text-rose-200">
            <Bell className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Emergency escalation</h3>
          </div>
          <p className="mt-2 text-sm text-rose-100/80">
            When someone says “help”, an alert is created instantly. If no caretaker acknowledges within 30 seconds, it escalates to the doctor and optionally emergency services.
          </p>
        </div>
      </div>
    </section>
  );
}
