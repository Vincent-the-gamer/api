import { __dirname } from "~~/tools/files"

export default eventHandler(() => {
  return {
    code: 200,
    dirname: __dirname
  }
})