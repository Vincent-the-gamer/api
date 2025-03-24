import { randomPick } from '~~/tools/array'
import { meiziTypes } from '~~/tools/assets'

export default eventHandler(async (event) => {
  const { baseUrl, env } = useRuntimeConfig(event)
  const vercelBase = 'https://vince-api.vercel.app'

  const { type }: any = getQuery(event)
  let _type: string

  if (type && meiziTypes.includes(type)) {
    _type = type
  }
  else {
    _type = randomPick(meiziTypes)
  }

  const meiziMap = await useStorage('assets:server').getItem('meizi.json')
  const meizi = randomPick(meiziMap[_type])

  let base = baseUrl

  if (env === 'vercel') {
    base = vercelBase
  }

  return {
    code: 200,
    url: `${base}/pictures/${_type}/${meizi}`,
  }
})
