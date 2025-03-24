import getKaomoji from '~~/tools/kaomoji'

export default eventHandler((event) => {
  return {
    code: 200,
    kaomoji: getKaomoji(),
  }
})
