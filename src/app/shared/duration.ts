export function monthsBetween(start: Date, end: Date): number {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
}

export function splitMonths(total: number): { years: number; months: number } {
  return { years: Math.floor(total / 12), months: total % 12 };
}

