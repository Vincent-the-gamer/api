import Wenyan from '@wenyan/core'
import { Language, run } from '~~/tools/codeRunner'

export default eventHandler(async (event) => {
  const { lang, code }: any = getQuery(event)
  let stdout: string

  switch (lang) {
    case Language.JavaScript:
      stdout = await run(Language.JavaScript, code)
      break
    case Language.Wenyan:
      const compiledToJs: string = Wenyan.compile(code)
      stdout = await run(Language.JavaScript, compiledToJs)
      break
    default:
      stdout = 'No language matched!'
      break
  }

  return {
    stdout,
  }
})
