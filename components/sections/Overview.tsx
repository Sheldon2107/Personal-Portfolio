import { RecordHeader } from "@/components/Dossier";
import { profile, education } from "@/lib/content";

export default function Overview() {
  return (
    <div>
      <RecordHeader
        code="00 — Overview"
        title="Case Summary"
        fields={[
          { label: "Subject", value: profile.name },
          { label: "Role", value: profile.role },
          { label: "Base", value: profile.location },
          { label: "Status", value: "Active" },
        ]}
      />

      <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
        {profile.summary}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-sm border border-line bg-panel p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
            Education
          </p>
          <p className="mt-2 text-sm font-medium text-ink">
            {education.institution}
          </p>
          <p className="mt-1 text-sm text-ink-soft">{education.degree}</p>
          <p className="mt-1 text-xs text-muted">
            {education.graduation} · CGPA {education.cgpa}
          </p>
          <p className="mt-1 text-xs text-amber">{education.deansList}</p>
        </div>

        <div className="rounded-sm border border-line bg-panel p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
            Target Programmes
          </p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft">
            {profile.targets.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
