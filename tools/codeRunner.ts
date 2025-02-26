import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export enum Language {
  JavaScript = 'js',
  Wenyan = 'wy',
}

export function run(lang: Language, code: string): Promise<string> {
  switch (lang) {
    case Language.JavaScript:
      return new Promise((resolve, reject) => {
        fs.writeFile(`${__dirname}/main.js`, code, (err) => {
          if (err)
            reject('Write file error!')

          exec(`node ${__dirname}/main.js`, (err, stdout, stderr) => {
            if (stdout) {
              resolve(stdout)
            }
            if (stderr)
              reject(stderr)
          })
        })
      })
    default:
      break
  }
}
