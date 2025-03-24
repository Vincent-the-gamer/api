import fs from "node:fs"
import path from "node:path"
import { __dirname } from "~~/tools/files"

export default eventHandler((event) => {
  const { dir }: any = getQuery(event)
  return {
    code: 200,
    path: dir,
    pathExists: fs.existsSync(dir),
    currentJsPath: __dirname,
    parentPath: path.resolve(dir, "../"),
  }
})
