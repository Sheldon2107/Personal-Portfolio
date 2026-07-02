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
    <main className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar active={active} onChange={setActive} />
      <section className="flex-1 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div
          key={active}
          className="mx-auto max-w-3xl animate-[fadein_0.3s_ease]"
        >
          <ActivePanel />
        </div>
      </section>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
