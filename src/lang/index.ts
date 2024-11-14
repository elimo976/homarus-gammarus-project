// lang/index.ts
import appFooter from './appFooter'
import appHeader from './appHeader'
import appHero from './appHero'
import homePage from './homePage'
import navigationMenu from './navigationMenu'

export interface Messages {
  [key: string]: {
    [key: string]: string
  }
}

const messages: Messages = {
  en: {
    ...homePage.en, // Spread delle traduzioni in inglese per la home page
    ...appHeader.en,
    ...navigationMenu.en,
    ...appHero.en,
    ...appFooter.en,
  },
  it: {
    ...homePage.it, // Spread delle traduzioni in italiano per la home page
    ...appHeader.it,
    ...navigationMenu.it,
    ...appHero.it,
    ...appFooter.it,
  },
}

export default messages
