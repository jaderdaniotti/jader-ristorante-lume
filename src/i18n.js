/**
 * Stub i18n – evita 404 se una dipendenza richiede i18n.
 * Non usato direttamente dall'app.
 */
export default {
  use: () => ({}),
  t: (key) => key,
};
