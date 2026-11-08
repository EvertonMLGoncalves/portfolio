import { monthsBetween, splitMonths } from './duration';

describe('duration', () => {
  it('counts both the first and the last month', () => {
    expect(monthsBetween(new Date(2024, 6, 1), new Date(2024, 9, 1))).toBe(4);
    expect(monthsBetween(new Date(2024, 2, 1), new Date(2024, 6, 1))).toBe(5);
  });

  it('matches the total time at the company on 2026-11', () => {
    const months = monthsBetween(new Date(2024, 2, 1), new Date(2026, 10, 15));
    expect(splitMonths(months)).toEqual({ years: 2, months: 9 });
  });

  it('splits months into years and months', () => {
    expect(splitMonths(12)).toEqual({ years: 1, months: 0 });
    expect(splitMonths(7)).toEqual({ years: 0, months: 7 });
  });
});
