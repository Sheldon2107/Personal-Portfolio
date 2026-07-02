import { RecordHeader } from "@/components/Dossier";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <div>
      <RecordHeader
        code="01 — Experience"
        title="Work History"
        fields={[
          { label: "Entries", value: String(experience.length) },
          { label: "Current", value: experience[0]?.status ?? "—" },
        ]}
      />

      <div className="space-y-10">
        {experience.map((job) => (
          <article
            key={job.id}
            className="rounded-sm border border-line bg-panel p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-amber">
                  {job.id}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                  {job.role}
                </h3>
                <p className="text-sm text-ink-soft">
                  {job.org} — {job.location}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <p className="mt-1 text-xs font-medium text-amber">
                  {job.status}
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted">
              Supervisor — {job.supervisor}
            </p>

            <ul className="mt-4 space-y-2 border-t border-line pt-4">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
