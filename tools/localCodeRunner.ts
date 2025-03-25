import { exec } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Wenyan from '@wenyan/core'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

enum Language {
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

function run(lang: Language, code: string): Promise<string> {
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

export async function localRunner(lang: string, code: string) {
  let result: string

  switch (lang) {
    case Language.JavaScript:
      result = await run(Language.JavaScript, code)
      break
    case Language.Wenyan:
      result = await run(Language.Wenyan, code)
      break
    case Language.Python:
      result = await run(Language.Python, code)
      break
    case Language.Python3:
      result = await run(Language.Python3, code)
      break
    default:
      result = 'No language matched!'
      break
  }

  return result
}