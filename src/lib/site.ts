/**
 * Central site-wide constants. Update the deployment domain here once live.
 */

/** Production URL (no trailing slash). Used for canonical URLs and sitemap. */
export const SITE_URL = 'https://calculopedia.darzh.xyz';

export const SITE_NAME = 'Calculopedia';

export const SITE_TAGLINE = 'Free online calculators for finance, health, dates and everyday math.';

/** Default locale used for server-rendered content and worked examples. */
export const DEFAULT_LANG = 'en-IN';
export const DEFAULT_COUNTRY = 'IN';
export const DEFAULT_CURRENCY = 'INR';
export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

/** Category silos. Slug must match `category` in calculator configs. */
export const CATEGORIES: readonly {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  /** Material Symbols icon name, shown on cards and hubs. */
  icon: string;
}[] = [
  {
    slug: 'finance',
    label: 'Finance',
    tagline: 'Loans, EMIs, investments, tax & salary tools',
    description:
      'Financial calculators for loans, EMIs, SIP, FD, RD, compound interest, income tax, GST and more.',
    icon: 'account_balance_wallet',
  },
  {
    slug: 'health',
    label: 'Health & Fitness',
    tagline: 'BMI, calories, weight & pregnancy tools',
    description: 'Health calculators for BMI, calorie needs, ideal weight and pregnancy due dates.',
    icon: 'monitor_heart',
  },
  {
    slug: 'date-time',
    label: 'Date & Time',
    tagline: 'Age, date duration & time calculators',
    description:
      'Date and time calculators for age, days between dates, date addition and time duration.',
    icon: 'calendar_month',
  },
  {
    slug: 'math',
    label: 'Math & Percentage',
    tagline: 'Percentage and everyday math tools',
    description: 'Percentage calculators and everyday math tools for quick, accurate results.',
    icon: 'percent',
  },
];

export function categoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

/**
 * Featured calculators on the homepage, ordered by measured search demand
 * (from the top-searches dataset). Slugs must exist in the registry.
 */
export const TOP_CALCULATORS = [
  'age-calculator',
  'loan-emi-calculator',
  'sip-calculator',
  'fd-calculator',
  'income-tax-calculator',
  'compound-interest-calculator',
  'gst-calculator',
  'bmi-calculator',
];

/** Google Analytics 4 Measurement ID. Leave empty to disable GA4. */
export const GA4_ID = 'G-N394NHVP77';

/**
 * Google AdSense Publisher ID (ca-pub-XXXXXXXXXXXX).
 * Found in the AdSense dashboard (Settings > Account information).
 * Leave empty to disable ads entirely.
 */
export const AD_CLIENT_ID = 'ca-pub-6824360436432405';

/**
 * AdSense ad units, created once in the dashboard (Ads > By ad unit > New ad
 * unit). Each unit gives a numeric `data-ad-slot` ID. Reusing one unit per
 * position across pages is fine. Key = AdSlot `unit` prop.
 *
 * - `display` units: format "auto" (leaderboard, rectangle)
 * - In-article unit: format "fluid" with layout "in-article", flows between
 *   paragraphs inside blog/glossary posts
 * - Multiplex unit: format "autorelaxed", shows related-content previews
 */
export const AD_UNITS: Record<string, { slotId: string; format: string; layout?: string; minHeight: string }> = {
  leaderboard: {
    slotId: '7834694303',
    format: 'auto',
    minHeight: 'min-h-[90px] md:min-h-[120px]',
  },
  rectangle: {
    slotId: '7736239924',
    format: 'auto',
    minHeight: 'min-h-[250px]',
  },
  inArticle: {
    slotId: '6147826081',
    format: 'fluid',
    layout: 'in-article',
    minHeight: 'min-h-[250px]',
  },
  multiplex: {
    slotId: '1302693518',
    format: 'autorelaxed',
    minHeight: 'min-h-[280px]',
  },
};
