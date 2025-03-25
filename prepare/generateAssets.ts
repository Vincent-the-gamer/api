/**
 * Run before build, generate meizi api data.
 */
import path from 'node:path'
import { __dirname } from '~~/composables'
import { meiziTypes } from '~~/composables/assets'
import { readFileNames, writeFile } from '~~/tools/files'

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
