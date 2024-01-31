/**
 * @typedef {import('../types.js').Glyph} Glyph
 * @typedef {import('../types.js').Font} Font
 */

/**
 * Get glyph for a given code point
 *
 * @param {number} [value] codePoint
 * @param {Font} [font] font
 * @returns {Glyph} glyph
 * */
export default function fromCodePoint(value, font) {
  return font && value ? font.glyphForCodePoint(value) : null;
}
