import { translations, type Language, type TranslationKey } from './translations'

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang === 'en') return 'en'
  return 'ja'
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations['ja'][key]
  }
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === 'ja') return path
  return `/en${path}`
}
