/**
 * Compare a transcription to the expected answer, ignoring case, accents,
 * punctuation and spacing.
 */

/** Lowercase words without accents and punctuation */
export function normalize(text: string): string {
  return (
    text
      // compatibility decomposition: accents apart, "²" as "2", "ﬁ" as "fi"
      .normalize("NFKD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}]+/gu, " ")
      .trim()
  );
}

/** Number of characters to insert, delete or replace to go from a to b */
function levenshtein(a: string, b: string): number {
  let previous = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous = current;
  }
  return previous[b.length];
}

/** Similarity between a response and the expected answer, from 0 to 100 */
export function similarityScore(response: string, answer: string): number {
  const a = normalize(response);
  const b = normalize(answer);
  const length = Math.max(a.length, b.length);
  if (length === 0) return 100;
  return Math.round(100 * (1 - levenshtein(a, b) / length));
}
