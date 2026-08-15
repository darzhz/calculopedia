import type { OutputField } from './schema';
import type { Locale } from './locale';
import { formatCurrency, formatNumber, formatPercent, formatDuration, formatDate } from './locale';

/** Format an output value for display. Shared by the client widget and SSR worked example. */
export function formatOutputValue(out: OutputField, value: number | string, loc: Locale): string {
  const num = typeof value === 'number' ? value : Number(value);
  switch (out.format) {
    case 'currency':
      return formatCurrency(num, loc, out.decimals ?? 2);
    case 'percent':
      return formatPercent(num, loc, out.decimals ?? 1);
    case 'number':
      return formatNumber(num, loc, out.decimals ?? 0);
    case 'decimal':
      return formatNumber(num, loc, out.decimals ?? 2);
    case 'duration':
      return formatDuration(num);
    case 'date':
      return formatDate(String(value), loc);
    case 'text':
      return String(value);
    default:
      return String(value);
  }
}
