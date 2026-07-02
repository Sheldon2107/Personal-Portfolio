import { RecordHeader } from "@/components/Dossier";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <div>
      <RecordHeader
        code="05 — Credentials"
        title="Certifications"
        fields={[{ label: "Entries", value: String(certifications.length) }]}
      />

      <div className="space-y-3">
        {certifications.map((c) => (
          <div
            key={c.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded-sm border border-line bg-panel px-5 py-4"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-amber">
                {c.id}
              </p>
              <p className="mt-1 text-sm font-medium text-ink">{c.name}</p>
              <p className="text-xs text-muted">{c.issuer}</p>
            </div>
            {c.date && (
              <p className="font-mono text-xs text-muted">{c.date}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
