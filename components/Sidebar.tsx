"use client";

import { profile } from "@/lib/content";

export type TabId =
  | "overview"
  | "experience"
  | "projects"
  | "skills"
  | "credentials"
  | "contact";

const NAV: { id: TabId; label: string; code: string }[] = [
  { id: "overview", label: "Overview", code: "00" },
  { id: "experience", label: "Experience", code: "01" },
  { id: "projects", label: "Projects", code: "02" },
  { id: "skills", label: "Skills", code: "03" },
  { id: "credentials", label: "Credentials", code: "04" },
  { id: "contact", label: "Contact", code: "05" },
];

export default function Sidebar({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[300px] shrink-0 border-b lg:border-b-0 lg:border-r border-line bg-panel/60">
      <div className="flex h-full flex-col justify-between p-8">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest2 text-muted">
            <span className="status-dot inline-block h-2 w-2 rounded-full bg-amber text-amber" />
            {profile.status}
          </div>

          <h1 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-1 font-mono text-xs text-muted">
            File {profile.fileId}
          </p>

          <div className="mt-6 space-y-1 text-sm text-ink-soft">
            <p>{profile.role}</p>
            <p>{profile.org}</p>
            <p className="text-muted">{profile.location}</p>
          </div>

          <nav className="mt-10 border-t border-line pt-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest2 text-muted">
              Index
            </p>
            <ul className="space-y-1">
              {NAV.map((item) => {
                const isActive = item.id === active;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onChange(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`group flex w-full items-center gap-3 rounded-sm px-2 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-amber-tint text-ink"
                          : "text-ink-soft hover:bg-amber-tint/60 hover:text-ink"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] ${
                          isActive ? "text-amber" : "text-muted group-hover:text-amber"
                        }`}
                      >
                        {item.code}
                      </span>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-amber" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10 space-y-4 border-t border-line pt-6">
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center justify-center gap-2 rounded-sm border border-amber bg-amber-tint px-4 py-2.5 font-mono text-xs uppercase tracking-widest2 text-amber transition-colors hover:bg-amber hover:text-paper"
          >
            Download CV
          </a>

          <div className="space-y-2 text-xs text-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-amber"
            >
              LinkedIn — Sheldon Stephen
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-amber"
            >
              GitHub — Sheldon2107
            </a>
            <a href={`mailto:${profile.email}`} className="block hover:text-amber">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
