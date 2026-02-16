import { formatPhone } from './formatContact';

// Test -> test()
// Testsuite -> describe()

// Assertion = Behauptung od. Ueberpruefung
// TODO: later Snapshots
describe('formatPhone', () => {
  describe('valid formatting (positive cases)', () => {
    test('removes single spaces', () => {
      expect(formatPhone('+12 3456 7890 1234')).toBe('+12345678901234');
    });

    test('leaves number without spaces unchanged', () => {
      expect(formatPhone('+12345678901234')).toBe('+12345678901234 ');
    });

    test('removes multiple spaces between numbers', () => {
      expect(formatPhone('+12 3456  7890 1234')).toBe('+12345678901234');
    });

    test('removes leading and trailing spaces', () => {
      expect(formatPhone(' +12 3456  7890 1234 ')).toBe('+12345678901234');
    });
  });

  describe('edge cases', () => {
    test('empty string returns empty string', () => {
      expect(formatPhone('')).toBe('');
    });
  });

  describe('current limitations (only removes spaces)', () => {
    test('keeps hyphens', () => {
      expect(formatPhone('+12-3456-7890-1234')).toBe('+12-3456-7890-1234');
    });

    test('keeps parentheses', () => {
      expect(formatPhone('+12 (3456) 7890-1234')).toBe('+12(3456)7890-1234');
    });

    test('keeps dots', () => {
      expect(formatPhone('+12 3456.7890.1234')).toBe('+123456.7890.1234');
    });
  });

  describe('future improvements', () => {
    test.failing('should remove slashes in future implementation', () => {
      expect(formatPhone('+12 3456/7890/1234')).toBe('+12345678901234');
    });

    test.skip('should remove mixed non-numeric characters', () => {
      expect(formatPhone('+12 (3456)-7890.1234/')).toBe('+12345678901234');
    });
  });
});
