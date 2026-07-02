import { RecordHeader, Tag } from "@/components/Dossier";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <div>
      <RecordHeader
        code="02 — Projects"
        title="Project Log"
        fields={[
          { label: "Entries", value: String(projects.length) },
          { label: "Sort", value: "Most recent" },
        ]}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-sm border border-line bg-panel p-6"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-amber">
                {p.id}
              </p>
              <Tag>{p.tag}</Tag>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              {p.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm bg-amber-tint px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-mono text-xs text-amber hover:underline"
              >
                View →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
