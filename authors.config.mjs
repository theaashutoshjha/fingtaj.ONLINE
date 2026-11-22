// Author profiles for Fingtaj.
export const AUTHORS = [
  {
    slug: 'ashutosh-jha',
    name: 'Ashutosh Jha',
    role: 'Founder',
    credentials: '[OWNER: add only true credentials]',
    experience: 'Founder of Fingtaj, focusing on real estate calculations, Indian property purchase procedures, stamp duty schedules, and home loan financing arithmetic.',
    photoPath: '/img/authors/ashutosh-jha.svg',
    links: [
      { label: 'Contact', url: '/contact' }
    ],
    bio: 'Ashutosh Jha is the founder of Fingtaj. He created Fingtaj to make Indian property buying, land measurement, stamp duty arithmetic, and construction estimations transparent, formula-backed, and accessible to individual home builders and buyers without commercial sponsorship or bias.',
    areas: ['Property Buying & Registration', 'Home Loans & EMI', 'Land Area Conversions', 'Stamp Duty & Circle Rates']
  }
];

export const getAuthor = (slug = 'ashutosh-jha') => AUTHORS.find((a) => a.slug === slug) || AUTHORS[0];
export default AUTHORS;

