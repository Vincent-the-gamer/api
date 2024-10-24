import useRange from "~~/hooks/range"
import randomPick from "~~/tools/random"

const picInfo = {
    murasame: {
        minIndex: 1,
        maxIndex: 13,
        suffix: ".jpg"
    },
    mitsukasa_ayase: {
        minIndex: 1,
        maxIndex: 3,
        suffix: ".png"
    },
    tomotake_yoshino: {
        minIndex: 1,
        maxIndex: 9,
        suffix: ".jpg"
    }
}

const types: string[] = Object.keys(picInfo)

export default eventHandler((event) => {
    const { baseUrl } = useRuntimeConfig(event)

    const type = randomPick(types)
    const { minIndex, maxIndex, suffix } = picInfo[type]
    const range = useRange(minIndex, maxIndex + 1)
    const picIndex = randomPick(range)

    return {
        code: 200,
        url: `${baseUrl}/pictures/${type}/${type + picIndex + suffix}`
    }
})  