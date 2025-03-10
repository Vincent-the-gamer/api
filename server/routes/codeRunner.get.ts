import { Language, run } from '~~/tools/codeRunner'

export default eventHandler(async (event) => {
  const { lang, code }: any = getQuery(event)
  let stdout: string

  switch (lang) {
    case Language.JavaScript:
      stdout = await run(Language.JavaScript, code)
      break
    case Language.Wenyan:
      stdout = await run(Language.Wenyan, code)
      break
    case Language.Python:
      stdout = await run(Language.Python, code)
      break
    case Language.Python3:
      stdout = await run(Language.Python3, code)
      break
    default:
      stdout = 'No language matched!'
      break
  }

  return {
    stdout,
  }
})
