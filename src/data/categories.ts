export interface CategoryMeta {
  label: string;
  color: string;
  bg: string;
}

// Each category gets a colour pulled from the spice rack — tied to what's
// actually cooked in that section, not a generic palette swatch.
export const CATEGORIES: Record<string, CategoryMeta> = {
  sniadanie: { label: 'Śniadania', color: '#8a5a1f', bg: '#f2d99b' }, // owies / miód
  obiad: { label: 'Obiady', color: '#8a2e17', bg: '#f0b28f' }, // pomidor / kumin
  koktajl: { label: 'Koktajle', color: '#1f5a52', bg: '#a9dcd2' }, // mięta / mleko
  ciasto: { label: 'Ciasta', color: '#7a2340', bg: '#eeb8cc' }, // owoce / sernik
  'pasta-kanapkowa': { label: 'Pasty kanapkowe', color: '#5a5320', bg: '#dcd598' }, // fasola / cebula
  sos: { label: 'Sosy i marynaty', color: '#8f3d0e', bg: '#f3c58e' }, // chili / papryka
  ogolne: { label: 'Ogólne', color: '#3d4a3a', bg: '#c3cfb9' }, // soja / tofu
};

export function categoryFor(tag: string): CategoryMeta {
  return CATEGORIES[tag] ?? { label: tag, color: '#4a4a44', bg: '#dcd8c8' };
}
