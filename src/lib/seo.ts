import type { CalculatorConfig } from './schema';
import { SITE_NAME, SITE_URL } from './site';

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function webApplicationSchema(config: CalculatorConfig, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.title,
    description: config.shortDescription,
    url: absoluteUrl(url),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: 'en',
    dateModified: config.updated,
    creator: { '@type': 'Organization', name: SITE_NAME },
  };
}

export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(url),
    datePublished,
    dateModified,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  };
}
