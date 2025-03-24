import path from "node:path"
import { randomPick } from "~~/tools/array"
import { getPublicDir, readFileNames, __dirname } from "~~/tools/files"

const types = [
    "common",
    "ayachi_nene",
    "mitsukasa_ayase",
    "murasame",
    "tomotake_yoshino"
]

export default eventHandler((event) => {
    const { type }: any = getQuery(event)
    let _type: string
    
    if(type && types.includes(type)) {
        _type = type
    } else {
        _type = randomPick(types)
    }

    const { baseUrl } = useRuntimeConfig(event)

    const publicDir = getPublicDir(event)
  
    const files = readFileNames(
        path.join(publicDir, `./pictures/${_type}`)
    )
    const meizi = randomPick(files)

    return {
        code: 200,
        url: `${baseUrl}/pictures/${_type}/${meizi}`,
        dirname: __dirname
    }
})
