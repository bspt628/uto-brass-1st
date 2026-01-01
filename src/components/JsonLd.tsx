import { CONCERT_INFO, ORGANIZATION, SITE_CONFIG } from '@/lib/constants';

export function JsonLd() {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: 'UTO BRASS 第1回演奏会',
    description: SITE_CONFIG.description,
    startDate: `${CONCERT_INFO.date}T${CONCERT_INFO.startTime}:00+09:00`,
    doorTime: `${CONCERT_INFO.date}T${CONCERT_INFO.doorOpen}:00+09:00`,
    endDate: `${CONCERT_INFO.date}T${CONCERT_INFO.endTime}:00+09:00`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: CONCERT_INFO.venue.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '内藤町87番地 四谷区民センター9階',
        addressLocality: '新宿区',
        addressRegion: '東京都',
        postalCode: '160-0014',
        addressCountry: 'JP',
      },
    },
    performer: {
      '@type': 'MusicGroup',
      name: ORGANIZATION.name,
      description: ORGANIZATION.description,
    },
    organizer: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      url: SITE_CONFIG.url,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      url: CONCERT_INFO.ticketUrl,
      validFrom: '2025-01-01',
    },
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    url: SITE_CONFIG.url,
    isAccessibleForFree: true,
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: ORGANIZATION.name,
    description: ORGANIZATION.description,
    url: SITE_CONFIG.url,
    sameAs: [
      ORGANIZATION.sns.twitter,
      ORGANIZATION.sns.instagram,
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: ORGANIZATION.parentOrg.name,
      url: ORGANIZATION.parentOrg.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
