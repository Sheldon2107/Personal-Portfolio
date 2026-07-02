import { RecordHeader } from "@/components/Dossier";
import { skills } from "@/lib/content";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <div>
      <RecordHeader
        code="03 — Skills"
        title="Capability Index"
        fields={[
          { label: "Categories", value: String(categories.length) },
        ]}
      />

      <div className="grid gap-6 sm:grid-cols-3">
        {categories.map(([category, items]) => (
          <div
            key={category}
            className="rounded-sm border border-line bg-panel p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              {category}
            </p>
            <ul className="mt-3 space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink-soft"
                >
                  <span className="h-1 w-1 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
