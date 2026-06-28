import type { CmsCta } from '../types/cms'

export function resolveCtaHref(cta?: CmsCta | null): string | null {
  if (!cta) return null
  if (cta.url) return cta.url
  if (cta.internalLink?.slug) {
    const slug = cta.internalLink.slug
    const path = slug === 'index' ? '/' : `/${slug}`
    return `${path}${cta.fragmentAndQueryString ?? ''}`
  }
  return cta.fragmentAndQueryString ?? null
}

export function slugifyAnchor(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
