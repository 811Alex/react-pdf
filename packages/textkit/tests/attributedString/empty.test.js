import { describe, expect, test } from 'vitest';

import empty from '../../src/attributedString/empty.js';

describe('attributeString empty operator', () => {
  test('should return empty attributed string', () => {
    const result = empty();

    expect(result).toHaveProperty('string', '');
    expect(result).toHaveProperty('runs', []);
  });
});
