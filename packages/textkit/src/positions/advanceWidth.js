/**
 * Return positions advance width
 *
 * @param {{ xAdvance: number }[]} positions
 * @returns {number} advance width
 */
export default function advanceWidth(positions) {
  return positions.reduce((acc, pos) => acc + (pos.xAdvance || 0), 0);
}
