/**
 * 模拟Python range()
 * @param start 开始索引
 * @param end 结束索引(不包含)
 * @param step 步长
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