export function WavyUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      aria-hidden
      className={className ?? "mx-auto mt-3 h-2 w-24 text-primary"}
    >
      <path
        d="M0 4 Q 15 0, 30 4 T 60 4 T 90 4 T 120 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
