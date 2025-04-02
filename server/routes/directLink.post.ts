import { getDirectLink } from "fast-dirpy"

export default eventHandler(async (event) => {
  const { rawLink } = await readBody(event)

  const directLink = await getDirectLink(rawLink as string)

  return {
    code: 200,
    directLink
  }
})

