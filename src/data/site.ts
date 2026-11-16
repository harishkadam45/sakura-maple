// Demo content in English and Japanese.
// Replace with client-supplied copy, photography and specs.
// Japanese copy should be reviewed by a native speaker before launch.

export type Lang = 'en' | 'ja';
type L = Record<Lang, string>;

export const langs: Record<Lang, { label: string; name: string; home: string }> = {
  en: { label: 'EN', name: 'English', home: '/' },
  ja: { label: '日本語', name: '日本語', home: '/ja/' },
};

export const MAPLE_LEAF_PATH =
  'm-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z';
export const MAPLE_LEAF_VIEWBOX = '-2100 -2100 4200 4200';

export const nav: { label: L; href: string }[] = [
  { label: { en: 'Our Story', ja: '私たちの物語' }, href: '#story' },
  { label: { en: 'Products', ja: '商品' }, href: '#collections' },
  { label: { en: 'Where to Buy', ja: '取扱店' }, href: '#retailers' },
  { label: { en: 'Recipes', ja: 'レシピ' }, href: '#recipes' },
  { label: { en: 'Wholesale', ja: '卸売・流通' }, href: '#wholesale' },
  { label: { en: 'Contact', ja: 'お問い合わせ' }, href: '#contact' },
];

export const ui = {
  en: {
    metaTitle: 'Sakura Maple — Premium Canadian Maple, Japanese-Inspired',
    metaDescription:
      'Sakura Maple Food Group crafts premium Canadian maple syrup, maple butter and Japanese-inspired specialty foods. Find us at Loblaws, Metro and Real Canadian Superstore.',
    skip: 'Skip to content',
    homeLabel: 'Sakura Maple — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    settings: 'Language · Theme',
    theme: 'Switch between light and dark theme',
    announcement: 'Now on shelves at Loblaws, Metro & Real Canadian Superstore',
    findStore: 'Find a store',
    findInStore: 'Find in store',
    wholesaleInquiry: 'Wholesale inquiry',
    hero: {
      eyebrow: 'Canadian maple · Japanese spirit',
      line1: 'Pure Canadian maple,',
      accent: 'refined',
      after: ' by Japanese craft.',
      body: 'Organic, 100% pure Canadian maple syrup — Grade A Amber with a rich, rounded taste — presented with the restraint and precision of Japanese food culture. Two nations, one table.',
      photoAlt: 'Maple syrup being poured over a bowl of granola and fruit, beside a jug of milk',
      cta1: 'Explore the collection',
      cta2: 'Where to buy',
      stats: [
        ['100%', 'Organic pure maple syrup'],
        ['Grade A', 'Amber · Rich taste'],
        ['2', 'Homes: Toronto & Sapporo'],
      ],
      vertical: 'カナダの恵み、日本の心',
    },
    values: [
      'Organic',
      'Product of Canada',
      'Grade A Amber · Rich taste',
      '250 mL to 45 gallon formats',
    ],
    collections: {
      eyebrow: 'The collection',
      title: 'From the sugar bush to the breakfast table.',
      viewAll: 'View all products',
      tabsLabel: 'Product collections',
      comingSoon: 'Coming soon',
    },
    story: {
      eyebrow: 'Our story',
      title: 'Bringing two great nations together through the passion of food.',
      p1: 'Sakura Maple began with a simple belief: that the generosity of the Canadian maple forest and the quiet discipline of Japanese food craft belong on the same table.',
      p2: 'With roots in both Toronto and Sapporo, we source pure Canadian maple and present it the Japanese way — nothing added, nothing wasted, every detail considered.',
      cta: 'Read our story',
      canada: {
        label: 'Canada · Kaede',
        title: 'Canadian heritage',
        photoAlt: 'Maple sap dripping from a tap in a maple tree into a metal bucket',
        body: 'Sap tapped at first thaw and boiled down slowly — the way it has been done for generations.',
      },
      japan: {
        label: 'Japan · Sakura',
        title: 'Japanese inspiration',
        body: 'Seasonality, balance and restraint guide every recipe, label and jar we make.',
      },
    },
    retailers: {
      eyebrow: 'Where to buy',
      title: 'On shelves across Canada.',
      body: 'Find Sakura Maple in the natural and specialty aisles of Canada’s leading grocers, and at independent fine food shops near you.',
      note: 'Retailer names are shown for reference only. Availability varies by location.',
      cta: 'See all retailers',
    },
    recipes: {
      eyebrow: 'Recipes & inspiration',
      title: 'Maple, the Japanese way.',
      viewAll: 'All recipes',
    },
    wholesale: {
      eyebrow: 'Wholesale & distribution',
      title: 'Bring Sakura Maple to your shelves.',
      body: 'We partner with retailers, distributors and food service buyers in Canada, the United States and Japan — with teams on the ground in Toronto and Sapporo.',
      cta2: 'Download catalogue',
      markets: [
        ['CA', 'Canada', 'カナダ'],
        ['US', 'United States', 'アメリカ'],
        ['JP', 'Japan', '日本'],
      ],
    },
    footer: {
      tagline: 'Premium Canadian maple products and Japanese-inspired specialty foods.',
      explore: 'Explore',
      offices: 'Offices',
      toronto: ['Toronto', 'Ontario, Canada'],
      sapporo: ['Sapporo', 'Hokkaido, Japan'],
      rights: 'Sakura Maple Food Group. All rights reserved.',
      demo: 'Homepage concept · Demo content',
    },
  },
  ja: {
    metaTitle: 'サクラメープル — カナダ産プレミアムメープル',
    metaDescription:
      'サクラメープル・フードグループは、カナダ産のプレミアムメープルシロップ、メープルバター、そして日本にインスパイアされたスペシャルティフードをお届けします。',
    skip: '本文へスキップ',
    homeLabel: 'サクラメープル — ホーム',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    language: '言語',
    settings: '言語 · テーマ',
    theme: 'ライト／ダークテーマを切り替え',
    announcement: 'Loblaws・Metro・Real Canadian Superstore にて販売中',
    findStore: '店舗を探す',
    findInStore: '取扱店を探す',
    wholesaleInquiry: '卸売のお問い合わせ',
    hero: {
      eyebrow: 'カナダのメープル · 日本のこころ',
      line1: 'カナダの純粋なメープルを、',
      accent: '日本の技',
      after: 'で磨く。',
      body: 'カナダ産オーガニック・100％ピュアメープルシロップ。グレードA アンバー（リッチテイスト）の豊かな味わいを、日本の食文化ならではの繊細さと丁寧さでお届けします。二つの国を、ひとつの食卓に。',
      photoAlt: 'ミルクピッチャーの横で、グラノーラとフルーツのボウルにメープルシロップをかけているところ',
      cta1: 'コレクションを見る',
      cta2: '取扱店を探す',
      stats: [
        ['100%', 'オーガニック ピュアメープル'],
        ['グレードA', 'アンバー・リッチテイスト'],
        ['2', '拠点：トロント＆札幌'],
      ],
      vertical: 'カナダの恵み、日本の心',
    },
    values: ['オーガニック', 'カナダ産', 'グレードA アンバー・リッチテイスト', '250mLから45ガロンまで'],
    collections: {
      eyebrow: 'コレクション',
      title: 'メープルの森から、朝の食卓へ。',
      viewAll: 'すべての商品を見る',
      tabsLabel: '商品コレクション',
      comingSoon: '近日発売',
    },
    story: {
      eyebrow: '私たちの物語',
      title: '食への情熱で、二つの国をひとつに。',
      p1: 'サクラメープルは、ひとつの想いから始まりました。カナダのメープルの森の豊かな恵みと、日本の食づくりの静かなこだわりは、同じ食卓にこそふさわしい、という想いです。',
      p2: 'トロントと札幌に拠点を置き、カナダ産のピュアメープルを日本らしい姿勢でお届けします。余計なものは加えず、無駄にせず、細部まで丁寧に。',
      cta: 'ストーリーを読む',
      canada: {
        label: 'カナダ · 楓',
        title: 'カナダの伝統',
        photoAlt: 'カエデの木の採取口からバケツに落ちるメープルの樹液',
        body: '雪解けとともに採取した樹液を、じっくりと煮詰める。何世代にもわたり受け継がれてきた製法です。',
      },
      japan: {
        label: '日本 · 桜',
        title: '日本の感性',
        body: '旬、調和、そして引き算の美学。レシピからラベル、瓶のひとつひとつまで、その考えが息づいています。',
      },
    },
    retailers: {
      eyebrow: '取扱店',
      title: 'カナダ全土の店頭で。',
      body: 'サクラメープルは、カナダの主要スーパーマーケットのナチュラル＆スペシャルティ売場、そして各地の専門食料品店でお求めいただけます。',
      note: '小売店名は参考として掲載しています。取り扱い状況は店舗により異なります。',
      cta: 'すべての取扱店を見る',
    },
    recipes: {
      eyebrow: 'レシピ＆アイデア',
      title: 'メープルを、和のスタイルで。',
      viewAll: 'すべてのレシピ',
    },
    wholesale: {
      eyebrow: '卸売・流通',
      title: 'サクラメープルを、あなたの売場に。',
      body: 'カナダ、アメリカ、日本の小売店・卸売業者・フードサービスのバイヤーの皆さまとパートナーシップを結んでいます。トロントと札幌の現地チームがサポートします。',
      cta2: 'カタログをダウンロード',
      markets: [
        ['CA', 'カナダ', 'Canada'],
        ['US', 'アメリカ', 'United States'],
        ['JP', '日本', 'Japan'],
      ],
    },
    footer: {
      tagline: 'カナダ産プレミアムメープル製品と、日本にインスパイアされたスペシャルティフード。',
      explore: 'メニュー',
      offices: '拠点',
      toronto: ['トロント', 'カナダ・オンタリオ州'],
      sapporo: ['札幌', '日本・北海道'],
      rights: 'Sakura Maple Food Group. All rights reserved.',
      demo: 'ホームページ コンセプト · デモコンテンツ',
    },
  },
} satisfies Record<Lang, unknown>;

// Real product line, taken from the Brands page of the current sakuramaple.com.
export type Category = 'sakura' | 'sierra' | 'kiki';

export type Product = {
  id: string;
  category: Category;
  name: L;
  /** Small vertical accent text: Japanese on the English page, English on the Japanese page. */
  accent: L;
  note: L;
  description: L;
  sizes: L;
  /** File in public/images (generated by `npm run images`). */
  image: string;
  width: number;
  height: number;
  /** True for transparent cut-outs; false for photos shot on white. */
  cutout?: boolean;
};

export const categories: { id: Category | 'all'; label: L }[] = [
  { id: 'all', label: { en: 'All', ja: 'すべて' } },
  { id: 'sakura', label: { en: 'Sakura Maple Syrup', ja: 'サクラメープル' } },
  { id: 'sierra', label: { en: 'Sierra Maple Syrup', ja: 'シエラメープル' } },
  { id: 'kiki', label: { en: 'KiKi Maple Water', ja: 'キキ メープルウォーター' } },
];

const ORGANIC_NOTE: L = { en: 'Organic · Grade A Amber', ja: 'オーガニック · グレードA アンバー' };
const KIKI_SIZES: L = { en: '250 mL  ·  750 mL', ja: '250 mL  ·  750 mL' };
const kiki = (
  id: string,
  en: string,
  ja: string,
  accentJa: string,
  descEn: string,
  descJa: string,
): Product => ({
  id: `kiki-${id}`,
  category: 'kiki',
  name: { en: `KiKi ${en}`, ja: `キキ ${ja}` },
  accent: { en: accentJa, ja: en.toUpperCase() },
  note: { en: 'Maple sweet water', ja: 'メープルスイートウォーター' },
  description: { en: descEn, ja: descJa },
  sizes: KIKI_SIZES,
  image: `kiki-${id}.webp`,
  width: 275,
  height: 1000,
  cutout: true,
});

export const products: Product[] = [
  {
    id: 'sakura-250ml',
    category: 'sakura',
    name: { en: 'Sakura Maple Organic Syrup', ja: 'サクラメープル オーガニックシロップ' },
    accent: { en: 'アンバー', ja: 'AMBER' },
    note: ORGANIC_NOTE,
    description: {
      en: 'Organic 100% pure Canadian maple syrup with a rich, rounded taste. The table-size glass bottle.',
      ja: 'カナダ産オーガニック・100％ピュアメープルシロップ。コクのあるリッチな味わい。食卓にちょうどいいガラスボトル。',
    },
    sizes: { en: '250 mL', ja: '250 mL' },
    image: 'sakura-250ml.webp',
    width: 498,
    height: 1000,
  },
  {
    id: 'sakura-375ml',
    category: 'sakura',
    name: { en: 'Sakura Maple Organic Syrup', ja: 'サクラメープル オーガニックシロップ' },
    accent: { en: 'リッチテイスト', ja: 'RICH TASTE' },
    note: ORGANIC_NOTE,
    description: {
      en: 'The same Grade A Amber syrup in our classic glass flask, sized for the family kitchen.',
      ja: '同じグレードA アンバーを、クラシックなガラスフラスコで。ご家庭のキッチンにぴったりのサイズです。',
    },
    sizes: { en: '375 mL', ja: '375 mL' },
    image: 'sakura-375ml.webp',
    width: 514,
    height: 1000,
  },
  {
    id: 'sakura-1l',
    category: 'sakura',
    name: { en: 'Sakura Maple Organic Syrup Jug', ja: 'サクラメープル オーガニックシロップ ジャグ' },
    accent: { en: 'ジャグ', ja: 'JUG' },
    note: ORGANIC_NOTE,
    description: {
      en: 'The traditional maple jug, for generous pours and everyday cooking and baking.',
      ja: '伝統的なメープルジャグ。たっぷり使いたい方や、毎日の料理・お菓子づくりに。',
    },
    sizes: { en: '1 L', ja: '1 L' },
    image: 'sakura-1l.webp',
    width: 476,
    height: 1000,
  },
  {
    id: 'sakura-bulk',
    category: 'sakura',
    name: { en: 'Sakura Maple Syrup — Bulk', ja: 'サクラメープル シロップ 業務用' },
    accent: { en: '業務用', ja: 'BULK' },
    note: { en: 'Grade A Amber · Food service', ja: 'グレードA アンバー · 業務用' },
    description: {
      en: 'Grade A Amber, rich taste, in drums for food service and food manufacturing.',
      ja: 'グレードA アンバー（リッチテイスト）をドラム缶で。フードサービスや食品製造向けです。',
    },
    sizes: { en: '5 gal  ·  45 gal', ja: '5ガロン  ·  45ガロン' },
    image: 'sakura-45gal.webp',
    width: 569,
    height: 1000,
  },
  {
    id: 'sierra-250ml',
    category: 'sierra',
    name: { en: 'Sierra Organic Maple Syrup', ja: 'シエラ オーガニックメープルシロップ' },
    accent: { en: 'シエラ', ja: 'SIERRA' },
    note: ORGANIC_NOTE,
    description: {
      en: 'Organic pure maple syrup, Canada Grade A Amber with a rich taste.',
      ja: 'オーガニックのピュアメープルシロップ。カナダ・グレードA アンバー、リッチテイスト。',
    },
    sizes: { en: '250 mL', ja: '250 mL' },
    image: 'sierra-250ml.webp',
    width: 494,
    height: 1000,
  },
  {
    id: 'sierra-375ml',
    category: 'sierra',
    name: { en: 'Sierra Organic Maple Syrup', ja: 'シエラ オーガニックメープルシロップ' },
    accent: { en: 'シエラ', ja: 'SIERRA' },
    note: ORGANIC_NOTE,
    description: {
      en: 'The larger Sierra bottle: organic pure maple syrup, Canada Grade A Amber.',
      ja: 'シエラの大きめボトル。オーガニックのピュアメープルシロップ、カナダ・グレードA アンバー。',
    },
    sizes: { en: '375 mL', ja: '375 mL' },
    image: 'sierra-375ml.webp',
    width: 515,
    height: 1000,
  },
  kiki(
    'maple',
    'Simply Maple',
    'シンプリーメープル',
    'メープル',
    '100% Canadian, naturally filtered pure maple sap. All natural, low sodium, no added water.',
    'カナダ産100％、自然ろ過したピュアなメープルの樹液。オールナチュラル、低ナトリウム、加水なし。',
  ),
  kiki(
    'blueberry',
    'Blueberry Maple',
    'ブルーベリーメープル',
    'ブルーベリー',
    'Pure maple sap with blueberry. All natural, low sodium, no added water.',
    'ピュアなメープルの樹液にブルーベリーを。オールナチュラル、低ナトリウム、加水なし。',
  ),
  kiki(
    'strawberry',
    'Strawberry Maple',
    'ストロベリーメープル',
    'ストロベリー',
    'Pure maple sap with strawberry. All natural, low sodium, no added water.',
    'ピュアなメープルの樹液にストロベリーを。オールナチュラル、低ナトリウム、加水なし。',
  ),
  kiki(
    'cranberry',
    'Cranberry Maple',
    'クランベリーメープル',
    'クランベリー',
    'Pure maple sap with cranberry. All natural, low sodium, no added water.',
    'ピュアなメープルの樹液にクランベリーを。オールナチュラル、低ナトリウム、加水なし。',
  ),
  kiki(
    'lemon',
    'Lemon Maple',
    'レモンメープル',
    'レモン',
    'Pure maple sap with lemon. All natural, low sodium, no added water.',
    'ピュアなメープルの樹液にレモンを。オールナチュラル、低ナトリウム、加水なし。',
  ),
];

export const retailers: { name: L; type: L; href: string }[] = [
  {
    name: { en: 'Loblaws', ja: 'Loblaws' },
    type: { en: 'National grocer', ja: '全国チェーン' },
    href: 'https://www.loblaws.ca',
  },
  {
    name: { en: 'Metro', ja: 'Metro' },
    type: { en: 'National grocer', ja: '全国チェーン' },
    href: 'https://www.metro.ca',
  },
  {
    name: { en: 'Real Canadian Superstore', ja: 'Real Canadian Superstore' },
    type: { en: 'National grocer', ja: '全国チェーン' },
    href: 'https://www.realcanadiansuperstore.ca',
  },
  {
    name: { en: 'Independent Specialty Stores', ja: '独立系専門店' },
    type: { en: 'Fine food & gift shops', ja: '専門食料品店・ギフトショップ' },
    href: '#retailers',
  },
];

// Photos come from the current site; recipe titles are demo content.
export const recipes: {
  image: string;
  alt: L;
  kanji: string;
  reading: L;
  title: L;
  meta: L;
}[] = [
  {
    image: 'pancakes.webp',
    alt: {
      en: 'A stack of pancakes with maple syrup being poured over the top',
      ja: 'メープルシロップをかけたパンケーキ',
    },
    kanji: '朝',
    reading: { en: 'Morning', ja: '朝食' },
    title: { en: 'Classic Pancakes with Maple Syrup', ja: 'クラシックパンケーキ メープルシロップがけ' },
    meta: { en: '20 min · Sakura Maple Amber', ja: '20分 · サクラメープル アンバー' },
  },
  {
    image: 'baumkuchen.webp',
    alt: {
      en: 'Maple syrup being poured over a baumkuchen ring cake',
      ja: 'バウムクーヘンにメープルシロップをかけているところ',
    },
    kanji: '菓',
    reading: { en: 'Sweets', ja: 'お菓子' },
    title: { en: 'Maple-Glazed Baumkuchen', ja: 'メープルがけバウムクーヘン' },
    meta: { en: 'Dessert · Sakura Maple Amber', ja: 'デザート · サクラメープル アンバー' },
  },
  {
    image: 'cutting-board.webp',
    alt: {
      en: 'A wooden cutting board surrounded by citrus fruit and fresh vegetables',
      ja: '柑橘類と新鮮な野菜に囲まれた木のまな板',
    },
    kanji: '菜',
    reading: { en: 'Garden', ja: '野菜' },
    title: { en: 'Maple Citrus Vinaigrette', ja: 'メープルと柑橘のドレッシング' },
    meta: { en: '5 min · Sakura Maple Amber', ja: '5分 · サクラメープル アンバー' },
  },
];
