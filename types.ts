export interface PicInfo {
  [roleName: string]: {
    minIndex: number
    maxIndex: number
    suffix: Record<string, number[]>
  }
}
