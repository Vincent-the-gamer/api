import fs from "node:fs"
import path from "node:path"
import { __dirname } from "~~/tools/files"

export default eventHandler((event) => {
  const { dir }: any = getQuery(event)

  const exists = fs.existsSync(dir)
  let files = []

  if(exists) {
    // find files
    files = fs.readdirSync(dir)
  }

  return {
    code: 200,
    path: dir,
    pathExists: exists,
    currentJsPath: __dirname,
    parentPath: path.resolve(dir, "../"),
    children: files
  }
})
