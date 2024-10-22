import useRange from "~~/hooks/range"

const picInfo = {
    murasame: {
        minIndex: 1,
        maxIndex: 7
    }
}

const types: string[] = Object.keys(picInfo)

function randomPick<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

export default eventHandler((event) => {
    const { baseUrl } = useRuntimeConfig(event)

    const type = randomPick(types)
    const { minIndex, maxIndex } = picInfo[type]
    const range = useRange(minIndex, maxIndex + 1)
    const picIndex = randomPick(range)

    return {
        code: 200,
        url: `${baseUrl}/pictures/${type}/${type + picIndex}.jpg`
    }
})  