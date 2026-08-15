/** Small pure helpers shared by formula modules. */

export const round2 = (n: number): number => Math.round(n * 100) / 100;

export const round = (n: number, places = 2): number => {
  const p = 10 ** places;
  return Math.round(n * p) / p;
};

export const clamp = (n: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, n));

export const DAY_MS = 24 * 60 * 60 * 1000;

export function parseISO(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

export function toISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function diffDays(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / DAY_MS);
}

export function todayISO(): string {
  return toISO(new Date());
}
