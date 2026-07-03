"use client";

import { useState } from "react";
import Sidebar, { TabId } from "@/components/Sidebar";
import Overview from "@/components/sections/Overview";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

const PANELS: Record<TabId, React.ComponentType> = {
  overview: Overview,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  credentials: Certifications,
  contact: Contact,
};

export default function Home() {
  const [active, setActive] = useState<TabId>("overview");
  const ActivePanel = PANELS[active];

  return (
    <main className="relative flex min-h-screen flex-col lg:flex-row bg-[#f8f9fc] text-gray-900 overflow-hidden">

      {/* ================= GRID BACKGROUND ================= */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* soft glow overlay (makes it more premium) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-transparent to-white/60" />

      {/* ================= SIDEBAR ================= */}
      <Sidebar active={active} onChange={setActive} />

      {/* ================= MAIN CONTENT ================= */}
      <section className="flex-1 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div
          key={active}
          className="
            mx-auto max-w-3xl
            animate-[fadein_0.35s_ease]
          "
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm p-6 sm:p-8">
            <ActivePanel />
          </div>
        </div>
      </section>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}