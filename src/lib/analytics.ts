/**
 * Minimal analytics helper. No-ops until a GA4 Measurement ID is configured
 * in `src/lib/site.ts`. Custom events per calculator power the "build next"
 * backlog: calculator_used, result_generated, related_calculator_clicked,
 * embed_copied.
 */

export function track(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', event, params);
  }
}
