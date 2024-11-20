// lang/index.ts
import AppCookie from './AppCookie'
import appFooter from './appFooter'
import appHeader from './appHeader'
import appHero from './appHero'
import homePage from './homePage'
import navigationMenu from './navigationMenu'

export interface Messages {
  [key: string]: {
    [key: string]: string | { [subKey: string]: string } // Modifica per supportare oggetti
  }
}

const messages: Messages = {
  en: {
    ...AppCookie.en,
    ...homePage.en, // Spread delle traduzioni in inglese
    ...appHeader.en,
    ...navigationMenu.en,
    ...appHero.en,
    ...appFooter.en,
  },
  it: {
    ...AppCookie.it,
    ...homePage.it, // Spread delle traduzioni in italiano
    ...appHeader.it,
    ...navigationMenu.it,
    ...appHero.it,
    ...appFooter.it,
  },
}

export default messages
