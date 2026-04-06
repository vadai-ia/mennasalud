/**
 * Microsoft Clarity integration.
 * Set VITE_CLARITY_ID in your environment variables (Vercel or .env file).
 * The script only loads when the variable is defined.
 */
export function initClarity() {
  const clarityId = import.meta.env.VITE_CLARITY_ID
  if (!clarityId) return
  if (typeof window === 'undefined') return

  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = 'https://www.clarity.ms/tag/' + i
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', clarityId)
}
