import Wenyan from '@wenyan/core'
import { Language, run } from '~~/tools/codeRunner'

export default eventHandler(async (event) => {
  const { code }: any = getQuery(event)
  const compiledToJs: string = Wenyan.compile(code)
  const result = await run(Language.JavaScript, compiledToJs)
  return {
    result,
  }
})
