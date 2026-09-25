// Shared list of countries + ISO dial codes for the phone-number country selector.
// Used by PopupForm.js and ContactForm.js. India is listed first since this is
// primarily an India-facing site, followed by the top NRI markets, then A–Z.

export const countryCodes = [
  { name: 'India', dial: '91', iso: 'IN', flag: '🇮🇳' },
  { name: 'United States', dial: '1', iso: 'US', flag: '🇺🇸' },
  { name: 'United Arab Emirates', dial: '971', iso: 'AE', flag: '🇦🇪' },
  { name: 'United Kingdom', dial: '44', iso: 'GB', flag: '🇬🇧' },
  { name: 'Saudi Arabia', dial: '966', iso: 'SA', flag: '🇸🇦' },
  { name: 'Canada', dial: '1', iso: 'CA', flag: '🇨🇦' },
  { name: 'Australia', dial: '61', iso: 'AU', flag: '🇦🇺' },
  { name: 'Singapore', dial: '65', iso: 'SG', flag: '🇸🇬' },
  { name: 'Qatar', dial: '974', iso: 'QA', flag: '🇶🇦' },
  { name: 'Kuwait', dial: '965', iso: 'KW', flag: '🇰🇼' },
  { name: 'Oman', dial: '968', iso: 'OM', flag: '🇴🇲' },
  { name: 'Bahrain', dial: '973', iso: 'BH', flag: '🇧🇭' },
  { name: 'Germany', dial: '49', iso: 'DE', flag: '🇩🇪' },
  { name: 'New Zealand', dial: '64', iso: 'NZ', flag: '🇳🇿' },
  { name: 'South Africa', dial: '27', iso: 'ZA', flag: '🇿🇦' },
  { name: 'Malaysia', dial: '60', iso: 'MY', flag: '🇲🇾' },
  { name: 'Hong Kong', dial: '852', iso: 'HK', flag: '🇭🇰' },
  { name: 'Japan', dial: '81', iso: 'JP', flag: '🇯🇵' },
  { name: 'France', dial: '33', iso: 'FR', flag: '🇫🇷' },
  { name: 'Italy', dial: '39', iso: 'IT', flag: '🇮🇹' },
  { name: 'Netherlands', dial: '31', iso: 'NL', flag: '🇳🇱' },
  { name: 'Switzerland', dial: '41', iso: 'CH', flag: '🇨🇭' },
  { name: 'Ireland', dial: '353', iso: 'IE', flag: '🇮🇪' },
  { name: 'Nigeria', dial: '234', iso: 'NG', flag: '🇳🇬' },
  { name: 'Kenya', dial: '254', iso: 'KE', flag: '🇰🇪' },
  { name: 'Sri Lanka', dial: '94', iso: 'LK', flag: '🇱🇰' },
  { name: 'Bangladesh', dial: '880', iso: 'BD', flag: '🇧🇩' },
  { name: 'Nepal', dial: '977', iso: 'NP', flag: '🇳🇵' },
  { name: 'Thailand', dial: '66', iso: 'TH', flag: '🇹🇭' },
  { name: 'Indonesia', dial: '62', iso: 'ID', flag: '🇮🇩' },
  { name: 'China', dial: '86', iso: 'CN', flag: '🇨🇳' },
  { name: 'South Korea', dial: '82', iso: 'KR', flag: '🇰🇷' },
  { name: 'Spain', dial: '34', iso: 'ES', flag: '🇪🇸' },
  { name: 'Sweden', dial: '46', iso: 'SE', flag: '🇸🇪' },
  { name: 'Norway', dial: '47', iso: 'NO', flag: '🇳🇴' },
  { name: 'Denmark', dial: '45', iso: 'DK', flag: '🇩🇰' },
  { name: 'Portugal', dial: '351', iso: 'PT', flag: '🇵🇹' },
  { name: 'Brazil', dial: '55', iso: 'BR', flag: '🇧🇷' },
  { name: 'Mexico', dial: '52', iso: 'MX', flag: '🇲🇽' },
  { name: 'Philippines', dial: '63', iso: 'PH', flag: '🇵🇭' },
  { name: 'Egypt', dial: '20', iso: 'EG', flag: '🇪🇬' },
]

// Helper to build "+<dial><digits>" the same way the reference PHP script did:
// strip everything but digits, then prefix a single '+'.
export function buildFullPhone(dial, rawNumber) {
  const digits = String(rawNumber || '').replace(/\D/g, '')
  return `+${dial}${digits}`
}
