import { ConcertInfo, ProgramItem, OrganizationInfo, NavItem } from '@/types';

export const CONCERT_INFO: ConcertInfo = {
  title: 'UTO BRASS \n第1回演奏会',
  date: '2026-03-24',
  dateDisplay: '2026年3月24日',
  dayOfWeek: '火',
  doorOpen: '18:30',
  startTime: '19:00',
  endTime: '21:00',
  venue: {
    name: '四谷区民ホール',
    address: '〒160-0014 東京都新宿区内藤町87番地 四谷区民センター9階',
    access: [
      '地下鉄：東京メトロ丸ノ内線「新宿御苑前」2番出口(大木戸門)より徒歩5分',
      '都バス：品97 新宿駅西口〜品川車庫「新宿一丁目」下車',
    ],
    googleMapsUrl: 'https://maps.google.com/?q=四谷区民ホール',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.71!3d35.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Zub6LC35Yy65rCR44Ob44O844Or!5e0!3m2!1sja!2sjp!4v1',
  },
  admission: '入場無料・全席自由',
  ticketUrl: 'https://teket.jp/16767/62281',
};

export const PROGRAM: ProgramItem[] = [
  {
    id: 1,
    composer: 'G.リチャーズ',
    composerEn: 'Goff Richards',
    title: '高貴なる葡萄酒を讃えて',
    titleEn: 'Homage to the Noble Grape',
  },
  {
    id: 2,
    composer: 'J.ホーナー',
    composerEn: 'James Horner',
    title: 'タイタニック・ファンタジー',
    titleEn: 'Titanic Fantasy',
  },
  {
    id: 3,
    composer: 'スコットランド民謡',
    composerEn: 'Scottish Folk Song',
    title: 'スコットランドの釣鐘草',
    titleEn: 'The Bluebells of Scotland',
    arranger: '独奏 芳賀大夢',
    arrangerEn: 'Soloist: Hiromu Haga',
  },
];

export const ORGANIZATION: OrganizationInfo = {
  name: 'UTO BRASS',
  nameEn: 'UTO BRASS',
  description: `UTO Brassは、東京大学音楽部管弦楽団（University of Tokyo Orchestra）の金管セクション有志により、2025年に結成されたブラスアンサンブルです。

「金管楽器の豊かな響きと多彩な表現を、より多くの方にお届けしたい」という想いのもと、親しみやすい名曲からクラシックの本格的なレパートリーまで、幅広いプログラムを通じて演奏をお届けします。`,
  parentOrg: {
    name: '東京大学音楽部管弦楽団',
    nameEn: 'University of Tokyo Orchestra',
    url: 'https://ut-orch.com',
    description: '東京大学の学生によって構成されるオーケストラ。1920年の発足以来、ベートーヴェン「交響曲第4番」の日本初演、マーラー「交響曲第1番『巨人』」の学生初演、ヨーロッパへの演奏旅行など多彩な演奏活動を続けてきた。また、NHK交響楽団の前身、新交響楽団の創立者である近衛秀麿氏、当団名誉指揮者である早川正昭氏など多数の音楽家を世に送り出してきた。現在は、三石精一氏を当団名誉音楽監督 桂冠指揮者として迎え、コンサートツアーと定期演奏会を活動の中心とする一方、学園祭での演奏会、小中学生を対象とした音楽教室など、さまざまな音楽活動を行っている。',
  },
  sns: {
    twitter: 'https://twitter.com/utobrass',
    instagram: 'https://instagram.com/utobrass',
  },
  email: 'utobrass@gmail.com',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'program', label: 'Program', href: '#program' },
  { id: 'access', label: 'Access', href: '#access' },
  { id: 'ticket', label: 'Ticket', href: '#ticket' },
];

export const SITE_CONFIG = {
  title: 'UTO BRASS 第1回演奏会',
  description: '東大オケ現役金管セクションによるアンサンブルの調べ。2026年3月24日(火) 四谷区民ホールにて開催。入場無料・全席自由。',
  url: 'https://brass.ut-orch.com',
  ogImage: '/images/ogp.png',
};
