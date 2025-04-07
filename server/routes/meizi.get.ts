import { meiziTypes } from '~~/composables/assets'
import { useBaseUrl } from '~~/hooks/base'
import { randomPick } from '~~/tools/array'

export default eventHandler(async (event) => {
  const baseUrl = useBaseUrl(event)

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

  return {
    code: 200,
    url: `${baseUrl}/pictures/${_type}/${meizi}`,
  }
})
