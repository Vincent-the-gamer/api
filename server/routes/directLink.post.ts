import { getAnimeIdHentaiLink, getBilibiliLink, getDirpyLink } from 'fast-dirpy'

export default eventHandler(async (event) => {
  const { env } = useRuntimeConfig(event)
  const { rawLink, source } = await readBody(event)

  let directLink: string

  switch (source) {
    case 'youtube':
      directLink = await getDirpyLink({
        url: rawLink,
      })
      break
    case 'bilibili':
      directLink = await getBilibiliLink(rawLink as string)
      break
    case 'animeidhentai':
      // cannot use in vercel.
      if (env !== 'vercel') {
        directLink = await getAnimeIdHentaiLink({
          url: rawLink,
        })
      }
      else {
        return {
          code: 500,
          message: 'Animehentai is not supported in vercel cloud function.',
        }
      }
      break
    default:
      return {
        code: 400,
        message: 'No matched sources! 没有视频来源网站匹配！',
      }
  }

  return {
    code: 200,
    directLink,
  }
})
