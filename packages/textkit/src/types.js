/**
 * @typedef {Object} Attachment
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {Object} Attributes
 * @property {Attachment} [attachment]
 * @property {string} [color]
 * @property {Font} [font]
 * @property {number} [fontSize]
 * @property {number} [lineHeight]
 * @property {number} [scale]
 * @property {boolean} [strike]
 */

/**
 * @typedef {Object} Glyph
 * @property {number} id
 * @property {number} [advanceWidth]
 * @property {number[]} codePoints
 */

/**
 * @typedef {Object} Font
 * @property {number} [ascent]
 * @property {number} [descent]
 * @property {number} [height]
 * @property {number} [unitsPerEm]
 * @property {function} [glyphForCodePoint]
 */

/**
 * @typedef {['start' | 'end', number, Attributes, number]} Point
 */

/**
 * @typedef {Object} Position
 * @property {number} xAdvance
 */

/**
 * @typedef {Object} Run
 * @property {number} [start]
 * @property {number} [end]
 * @property {number[]} [glyphIndices]
 * @property {Glyph[]} [glyphs]
 * @property {Position[]} [positions]
 * @property {Attributes} [attributes]
 */
