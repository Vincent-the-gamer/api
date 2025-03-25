/**
 * Copy of Python range()
 * @param start Start index
 * @param end End index(not included)
 * @param step step
 * @returns
 */
export default function useRange(start: number, end: number, step: number = 1): number[] {
  let current = start
  const list = []
  while (current < end) {
    list.push(current)
    current += step
  }

  return list
}
