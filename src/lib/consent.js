/**
 * Cookie consent state — stored in localStorage.
 *
 * Values:
 *   null | undefined  → user hasn't decided yet (show banner)
 *   'accepted'        → analytics cookies allowed
 *   'rejected'        → only strictly-necessary cookies
 */

const KEY = 'menna_cookie_consent'
const EVENT_NAME = 'menna:consent-changed'

export function getConsent() {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(KEY, value)
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }))
  } catch {
    // localStorage unavailable — fail silently
  }
}

export function onConsentChange(handler) {
  if (typeof window === 'undefined') return () => {}
  const listener = (e) => handler(e.detail)
  window.addEventListener(EVENT_NAME, listener)
  return () => window.removeEventListener(EVENT_NAME, listener)
}

export const CONSENT_ACCEPTED = 'accepted'
export const CONSENT_REJECTED = 'rejected'
