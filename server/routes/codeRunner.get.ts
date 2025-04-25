import { localRunner } from '~~/tools/localCodeRunner'
import { remoteRunner } from '~~/tools/remoteCodeRunner'

export default eventHandler(async (event) => {
  const { env } = useRuntimeConfig(event)
  const { lang, code, type }: any = getQuery(event)
  let stdout: string
  let stderr: string

  if (env !== 'vercel') {
    if (type === "remote") {
      const { stdout: out, stderr: err } = await remoteRunner(lang, code)
      stdout = out
      stderr = err
    } else {
      stdout = await localRunner(lang, code)
    }
  } else {
    const { stdout: out, stderr: err } = await remoteRunner(lang, code)
    stdout = out
    stderr = err
  }

  return {
    stdout,
    stderr,
  }
})
