import { exec } from 'node:child_process'
import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Wenyan from '@wenyan/core'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export enum Language {
  JavaScript = 'js',
  Wenyan = 'wy',
  Python = 'py',
  Python3 = 'py3',
}

function execute(tool: string, suffix: string, code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/main.${suffix}`, code, (err) => {
      if (err)
        reject('Write file error!')

      exec(`${tool} ${__dirname}/main.${suffix}`, (err, stdout, stderr) => {
        if (stdout) {
          resolve(stdout)
        }
        if (stderr)
          reject(stderr)
      })
    })
  })
}

export function run(lang: Language, code: string): Promise<string> {
  switch (lang) {
    case Language.JavaScript:
      return execute('node', 'js', code)
    case Language.Wenyan:
      const compiledToJs: string = Wenyan.compile(code)
      return execute('node', 'js', compiledToJs)
    case Language.Python:
      return execute('python', 'py', code)
    case Language.Python3:
      return execute('python3', 'py', code)
    default:
      break
  }
}
