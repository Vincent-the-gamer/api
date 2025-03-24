import fs from "node:fs"

export default eventHandler((event) => {
  const { path }: any = getQuery(event)
  return {
    code: 200,
    path,
    exists: fs.existsSync(path)
  }
})
