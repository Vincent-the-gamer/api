/**
 * Run before build, generate meizi api data.
 */

import path from 'node:path'
import { useDirname } from '~~/hooks/dirname'
import { meiziTypes } from '~~/tools/assets'
import { readFileNames, writeFile } from '~~/tools/files'

const __dirname = useDirname()

// generate meizi api data
function generateMeizi() {
  const fileMap = {}
  meiziTypes.forEach((type) => {
    fileMap[type] = readFileNames(
      path.resolve(__dirname, `../server/public/pictures/${type}`),
    )
  })

  writeFile(
    path.resolve(__dirname, '../server/assets/meizi.json'),
    JSON.stringify(fileMap),
  )
}

generateMeizi()
