import useRange from "~~/hooks/range"
import { randomPick, filterFromArray } from "~~/tools/array"
import { PicInfo } from "~~/types"

const picInfo: PicInfo = {
    murasame: {
        minIndex: 1,
        maxIndex: 13,
        suffix: {
            ".jpg": useRange(1, 14)
        }
    },
    mitsukasa_ayase: {
        minIndex: 1,
        maxIndex: 3,
        suffix: {
            ".png": useRange(1, 4)
        }
    },
    tomotake_yoshino: {
        minIndex: 1,
        maxIndex: 9,
        suffix: {
            ".jpg": useRange(1, 9)
        }
    },
    ayachi_nene: {
        minIndex: 1,
        maxIndex: 5,
        suffix: {
            ".jpg": [2],
            ".png": filterFromArray(useRange(1, 6), [2])
        }
    },
}

const types: string[] = Object.keys(picInfo)

export default eventHandler((event) => {
    const { baseUrl } = useRuntimeConfig(event)

    const type = randomPick(types)
    const { minIndex, maxIndex, suffix } = picInfo[type]
    const range = useRange(minIndex, maxIndex + 1)
    const picIndex: number = randomPick(range)

    let picSuffix: string
    const jpgIndexes: number[] = suffix[".jpg"] || []
    const pngIndexes: number[] = suffix[".png"] || []
    if(jpgIndexes.includes(picIndex))
        picSuffix = ".jpg"
    else if(pngIndexes.includes(picIndex))
        picSuffix = ".png"
    
    return {
        code: 200,
        url: `${baseUrl}/pictures/${type}/${type + picIndex + picSuffix}`
    }
})  