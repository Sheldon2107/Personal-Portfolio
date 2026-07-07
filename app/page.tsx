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
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper text-ink lg:flex-row">

      {/* Background Grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_right,rgba(35,48,66,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(35,48,66,0.04)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Warm Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(184,128,47,0.15),transparent_65%)]" />

      {/* Sidebar */}
      <Sidebar active={active} onChange={setActive} />

      {/* Content */}
      <section className="flex-1 px-6 py-10 lg:px-16 lg:py-14">
        <div
          key={active}
          className="
            mx-auto
            max-w-4xl
            rounded-3xl
            border
            border-line
            bg-panel/90
            backdrop-blur-md
            shadow-soft
            p-8
            animate-fadein
          "
        >
          <ActivePanel />
        </div>
      </section>
    </main>
  );
}