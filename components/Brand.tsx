import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="StockMind — на головну">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M5 19.5V14m6 5.5V9m6 10.5v-8m6 8V5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="m5 9 6-4 6 2 6-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>StockMind</span>
    </Link>
  );
}
