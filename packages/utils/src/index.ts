/**
 * Format currency in Indian Rupees (INR)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format distance in kilometers
 */
export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`;
  }
  return `${distanceKm.toFixed(1)} km`;
}

/**
 * Estimate travel time in minutes based on distance (assuming ~25 km/h urban two-wheeler speed)
 */
export function estimateDurationMinutes(distanceKm: number): number {
  const avgSpeedKmh = 24;
  const transitMinutes = (distanceKm / avgSpeedKmh) * 60;
  const bufferPickupMinutes = 8;
  return Math.ceil(transitMinutes + bufferPickupMinutes);
}

/**
 * Calculate basic delivery fare estimate for two-wheeler delivery
 */
export function calculateEstimatedFare(distanceKm: number, weightKg: number = 1): number {
  const baseFare = 40; // first 2 km
  const perKmRate = 12; // after 2 km
  const excessWeightCharge = weightKg > 5 ? (weightKg - 5) * 5 : 0;

  if (distanceKm <= 2) {
    return Math.round(baseFare + excessWeightCharge);
  }

  const extraDistance = distanceKm - 2;
  const fare = baseFare + extraDistance * perKmRate + excessWeightCharge;
  return Math.round(fare);
}

/**
 * Truncate long strings with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
