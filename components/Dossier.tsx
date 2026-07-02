export function RecordHeader({
  code,
  title,
  fields,
}: {
  code: string;
  title: string;
  fields: { label: string; value: string }[];
}) {
  return (
    <div className="mb-10 border-b border-line pb-6">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-amber">
        Record {code}
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
        {title}
      </h2>
      <dl className="mt-5 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4">
        {fields.map((f) => (
          <div key={f.label}>
            <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              {f.label}
            </dt>
            <dd className="mt-1 text-sm text-ink-soft">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-amber-soft bg-amber-tint px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-amber">
      {children}
    </span>
  );
}
