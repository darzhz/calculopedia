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

/** Reserved height classes for ad slots (prevent layout shift). */
export const AD_SLOT_SIZES: Record<string, string> = {
  leaderboard: 'min-h-[90px] md:min-h-[120px]',
  rectangle: 'min-h-[250px]',
  mobile: 'min-h-[90px]',
};
