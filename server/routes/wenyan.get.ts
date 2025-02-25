import Wenyan from '@wenyan/core'
import axios from 'axios'

export default eventHandler(async (event) => {
  const { code }: any = getQuery(event)
  const compiledToJs: string = Wenyan.compile(code)
  const { data }: any = await axios.post('https://glot.io/run/javascript?version=latest', {
    files: [{
      name: 'main.js',
      content: compiledToJs,
    }],
    command: '',
    stdin: '',
  })
  return {
    result: data.stdout,
  }
})
