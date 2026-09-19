export function FlagSingapore({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-4 w-5 shrink-0 overflow-hidden rounded-[2px] border border-black/10 shadow-sm ${className ?? ""}`}
      title="Singapore"
      aria-label="Singapore"
    >
      <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden>
        <rect width="20" height="7" fill="#ED2939" />
        <rect y="7" width="20" height="7" fill="#FFFFFF" />
        <circle cx="5.2" cy="3.5" r="2.2" fill="#FFFFFF" />
        <circle cx="5.9" cy="3.5" r="1.8" fill="#ED2939" />
        <g fill="#FFFFFF">
          <circle cx="8.6" cy="2.2" r="0.35" />
          <circle cx="9.5" cy="3" r="0.35" />
          <circle cx="9.5" cy="4.1" r="0.35" />
          <circle cx="8.6" cy="4.9" r="0.35" />
          <circle cx="7.7" cy="3.55" r="0.35" />
        </g>
      </svg>
    </span>
  );
}

export function FlagIndia({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-4 w-5 shrink-0 overflow-hidden rounded-[2px] border border-black/10 shadow-sm ${className ?? ""}`}
      title="India"
      aria-label="India"
    >
      <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden>
        <rect width="20" height="4.67" fill="#FF9933" />
        <rect y="4.67" width="20" height="4.66" fill="#FFFFFF" />
        <rect y="9.33" width="20" height="4.67" fill="#138808" />
        <circle
          cx="10"
          cy="7"
          r="1.6"
          fill="none"
          stroke="#000080"
          strokeWidth="0.45"
        />
        <circle cx="10" cy="7" r="0.35" fill="#000080" />
      </svg>
    </span>
  );
}
