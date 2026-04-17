export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-foreground text-background py-5">
      <div className="marquee flex gap-12 whitespace-nowrap">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-medium flex items-center gap-12"
          >
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
