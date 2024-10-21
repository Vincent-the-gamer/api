import getKaomoji from '~~/tools/kaomoji'

export default eventHandler(() => {
  return {
    code: 200,
    kaomoji: getKaomoji(),
  }
})
