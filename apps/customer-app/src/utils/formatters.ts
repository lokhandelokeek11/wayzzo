/**
 * Formatting utilities for currency, distance, duration, and phone numbers.
 */

export function formatCurrency(amount: number, currency: string = '₹'): string {
  return `${currency}${Math.round(amount).toLocaleString('en-IN')}`;
}

export function formatDistance(metersOrKm: number, isKm: boolean = false): string {
  const km = isKm ? metersOrKm : metersOrKm / 1000;
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${Math.round(minutes)} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMins = Math.round(minutes % 60);
  return `${hours} hr ${remainingMins > 0 ? `${remainingMins} min` : ''}`;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

