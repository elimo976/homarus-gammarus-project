import { createI18n } from 'vue-i18n'
import messages from './lang' // Importa le traduzioni e il tipo Messages
import type { Messages } from './lang'

// Crea l'istanza di Vue I18n
const i18n = createI18n({
  locale: localStorage.getItem('language') || 'it', // Imposta la lingua predefinita
  messages, // Imposta i messaggi di traduzione
} as { messages: Messages }) // Tipizza i messaggi come 'Messages'

export default i18n
