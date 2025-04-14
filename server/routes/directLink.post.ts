import { getDirectLink, getBilibiliDirectLink } from "fast-dirpy"

export default eventHandler(async (event) => {
  const { rawLink, source } = await readBody(event)

  let directLink: string

  switch(source) {
    case "youtube":
      directLink = await getDirectLink(rawLink as string)
      break
    case "bilibili":
      directLink = await getBilibiliDirectLink(rawLink as string)
      break
    default:
      return {
        code: 400,
        message: "No matched sources! 没有视频来源网站匹配！"
      }
  }

  return {
    code: 200,
    directLink
  }
})

