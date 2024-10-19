import getKaomoji from '~~/utils/kaomoji'

// @ts-expect-error no declare of eventHandler.
export default eventHandler(() => {
  return {
    message: getKaomoji(),
  }
})
