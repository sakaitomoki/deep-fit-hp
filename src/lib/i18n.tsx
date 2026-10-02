/**
 * The site is Japanese-only. `useT()` is kept as an identity helper so that
 * existing `t("日本語")` call sites keep working without touching every page.
 */
export function useT() {
  return (ja: string): string => ja;
}
