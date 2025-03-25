import axios from 'axios'

// 配置语言对应的请求传参
enum Language {
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  Python = 'python',
  Java = 'java',
  CPP = 'cpp',
  C = 'c',
  Wenyan = 'wenyan',
}

// 对应语言和main文件名称映射
const langToMainMap = {
  [Language.JavaScript]: 'main.js',
  [Language.TypeScript]: 'main.ts',
  [Language.Python]: 'main.py',
  [Language.Java]: 'main.java',
  [Language.CPP]: 'main.cpp',
  [Language.C]: 'main.c',
}

// 请求glot.io
export async function remoteRunner(lang: Language, code: string) {
  const url = `https://glot.io/run/${lang}?version=latest`
  const { data }: any = await axios.post(url, {
    files: [{
      name: langToMainMap[lang],
      content: code,
    }],
    command: '',
    stdin: '',
  })

  return {
    stdout: data.stdout,
    stderr: data.stderr,
  }
}
