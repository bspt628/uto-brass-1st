export interface ConcertInfo {
  title: string;
  subtitle: string;
  date: string;
  dateDisplay: string;
  dayOfWeek: string;
  doorOpen: string;
  startTime: string;
  endTime: string;
  venue: {
    name: string;
    address: string;
    phone: string;
    access: string[];
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  admission: string;
  ticketUrl: string;
}

export interface ProgramItem {
  id: number;
  composer: string;
  composerEn: string;
  title: string;
  titleEn?: string;
  arranger?: string;
}

export interface SnsLinks {
  twitter: string;
  instagram: string;
}

export interface OrganizationInfo {
  name: string;
  nameEn: string;
  description: string;
  parentOrg: {
    name: string;
    nameEn: string;
    url: string;
  };
  sns: SnsLinks;
  email: string;
}

export type ConcertStatus = 'upcoming' | 'soon' | 'today' | 'ended';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
