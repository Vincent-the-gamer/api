/**
 * Run before build, generate meizi api data.
 */
import path from "node:path"
import { useDirname } from "~~/hooks/dirname"
import { readFileNames, writeFile } from "~~/tools/files"
import { meiziTypes } from "~~/tools/assets"

const __dirname = useDirname()

function generateMeizi() {
    const fileMap = {}
    meiziTypes.forEach(type => {
        fileMap[type] = readFileNames(
            path.resolve(__dirname, `../server/public/pictures/${type}`)
        )
    })

    writeFile(
        path.resolve(__dirname, "../server/assets/meizi.json"), 
        JSON.stringify(fileMap)
    )
}

generateMeizi()