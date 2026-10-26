export const WHATSAPP_NUMBER = '2349137235901'

export function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}