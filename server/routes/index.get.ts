import getKaomoji from "~~/utils/kaomoji"

export default eventHandler(() => {
  return {
    message: getKaomoji(),
  }
})
