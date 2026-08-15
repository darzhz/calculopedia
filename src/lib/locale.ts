import { DEFAULT_LANG, DEFAULT_COUNTRY, DEFAULT_CURRENCY, DEFAULT_TIMEZONE } from './site';

export interface Locale {
  lang: string;
  tz: string;
  country: string;
  currency: string;
}

export const DEFAULT_LOCALE: Locale = {
  lang: DEFAULT_LANG,
  tz: DEFAULT_TIMEZONE,
  country: DEFAULT_COUNTRY,
  currency: DEFAULT_CURRENCY,
};

/** Common IANA timezones → country code (curated subset, easily extended). */
const TZ_TO_COUNTRY: Record<string, string> = {
  'Asia/Kolkata': 'IN',
  'Asia/Karachi': 'PK',
  'Asia/Dhaka': 'BD',
  'Asia/Colombo': 'LK',
  'Asia/Kathmandu': 'NP',
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/Phoenix': 'US',
  'America/Anchorage': 'US',
  'America/Toronto': 'CA',
  'America/Vancouver': 'CA',
  'Europe/London': 'GB',
  'Europe/Dublin': 'IE',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Europe/Madrid': 'ES',
  'Europe/Rome': 'IT',
  'Europe/Amsterdam': 'NL',
  'Europe/Stockholm': 'SE',
  'Europe/Oslo': 'NO',
  'Europe/Copenhagen': 'DK',
  'Europe/Helsinki': 'FI',
  'Europe/Warsaw': 'PL',
  'Europe/Lisbon': 'PT',
  'Europe/Athens': 'GR',
  'Australia/Sydney': 'AU',
  'Australia/Melbourne': 'AU',
  'Australia/Perth': 'AU',
  'Australia/Brisbane': 'AU',
  'Pacific/Auckland': 'NZ',
  'Asia/Dubai': 'AE',
  'Asia/Riyadh': 'SA',
  'Asia/Singapore': 'SG',
  'Asia/Tokyo': 'JP',
  'Asia/Shanghai': 'CN',
  'Asia/Hong_Kong': 'HK',
  'Asia/Seoul': 'KR',
  'Asia/Bangkok': 'TH',
  'Asia/Jakarta': 'ID',
  'Asia/Kuala_Lumpur': 'MY',
  'Asia/Manila': 'PH',
  'Asia/Taipei': 'TW',
  'Africa/Johannesburg': 'ZA',
  'America/Sao_Paulo': 'BR',
  'America/Mexico_City': 'MX',
  'Africa/Lagos': 'NG',
  'Africa/Nairobi': 'KE',
  'Africa/Cairo': 'EG',
};

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  IN: 'INR',
  PK: 'PKR',
  BD: 'BDT',
  LK: 'LKR',
  NP: 'NPR',
  US: 'USD',
  CA: 'CAD',
  GB: 'GBP',
  IE: 'EUR',
  DE: 'EUR',
  FR: 'EUR',
  ES: 'EUR',
  IT: 'EUR',
  NL: 'EUR',
  BE: 'EUR',
  AT: 'EUR',
  PT: 'EUR',
  GR: 'EUR',
  FI: 'EUR',
  AU: 'AUD',
  NZ: 'NZD',
  AE: 'AED',
  SA: 'SAR',
  SG: 'SGD',
  JP: 'JPY',
  CN: 'CNY',
  HK: 'HKD',
  KR: 'KRW',
  TH: 'THB',
  ID: 'IDR',
  MY: 'MYR',
  PH: 'PHP',
  TW: 'TWD',
  ZA: 'ZAR',
  BR: 'BRL',
  MX: 'MXN',
  NG: 'NGN',
  KE: 'KES',
  EG: 'EGP',
};

/** Best-effort country from a language tag like "en-IN" or "hi". */
function countryFromLang(lang: string): string {
  const parts = lang.split('-');
  if (parts.length >= 2 && parts[1].length === 2) return parts[1].toUpperCase();
  if (parts.length >= 3 && parts[1].length === 3 && parts[2].length === 2) {
    return parts[2].toUpperCase();
  }
  return '';
}

/**
 * Detect visitor locale from the browser's timezone and language.
 * Runs on the client only; falls back to the site default (India).
 */
export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const lang = navigator.language || DEFAULT_LANG;
  let tz = '';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    tz = '';
  }

  const country = (tz && TZ_TO_COUNTRY[tz]) || countryFromLang(lang) || DEFAULT_COUNTRY;
  const currency = COUNTRY_TO_CURRENCY[country] || DEFAULT_CURRENCY;

  return { lang, tz: tz || DEFAULT_TIMEZONE, country, currency };
}

/** Format a currency value in a locale-aware way. */
export function formatCurrency(value: number, loc: Locale, decimals = 2): string {
  try {
    return new Intl.NumberFormat(loc.lang, {
      style: 'currency',
      currency: loc.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: Math.min(decimals, 2),
    }).format(value);
  } catch {
    return value.toLocaleString();
  }
}

export function formatNumber(value: number, loc: Locale, decimals = 2): string {
  return value.toLocaleString(loc.lang, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

export function formatPercent(value: number, loc: Locale, decimals = 1): string {
  return `${formatNumber(value, loc, decimals)}%`;
}

/** Duration in minutes → "5h 30m". */
export function formatDuration(value: number): string {
  const total = Math.round(value);
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${h}h ${m}m`;
}

export function formatDate(iso: string, loc: Locale): string {
  try {
    return new Intl.DateTimeFormat(loc.lang, { dateStyle: 'long' }).format(
      new Date(iso + 'T00:00:00'),
    );
  } catch {
    return iso;
  }
}

export function formatAge(years: number, months: number, days: number): string {
  return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}, ${days} day${days === 1 ? '' : 's'}`;
}
