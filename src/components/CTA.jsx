import React from 'react';
import { Globe, Shield } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full bg-slate-950 pb-16 pt-8 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Doctor dashboard</h3>
            <p className="mt-2 text-sm text-white/70">Real-time overview of vitals, risks, and alerts across patients with secure access.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Caretaker console</h3>
            <p className="mt-2 text-sm text-white/70">Acknowledge help requests, manage reminders, and monitor daily summaries.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Patient companion</h3>
            <p className="mt-2 text-sm text-white/70">Voice-first experience for check-ins, mood tracking, and health guidance.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-fuchsia-500/10 p-6 sm:flex-row">
          <div>
            <h3 className="text-xl font-semibold">Ready to experience Virtual Nurse AI?</h3>
            <p className="mt-1 text-white/75">Enable safer, smarter, multilingual care with role-based privacy.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow/50 shadow-purple-500/10 transition hover:shadow-lg">
              Request access
              <Shield className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Learn more
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Virtual Nurse AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
