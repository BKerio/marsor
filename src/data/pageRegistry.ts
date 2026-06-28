import type { PageData } from '../types/cms'
import figurePage from './pages/figure.json'
import helixPage from './pages/helix.json'
import companyPage from './pages/company.json'
import newsPage from './pages/news.json'
import careersPage from './pages/careers.json'
import culturePage from './pages/culture.json'
import masterPlanPage from './pages/master-plan.json'
import termsPage from './pages/terms-and-conditions.json'
import privacyPage from './pages/privacy-policy.json'
import accessibilityPage from './pages/accessibility-statement.json'

export const PAGE_REGISTRY: Record<string, PageData> = {
  figure: figurePage as PageData,
  helix: helixPage as PageData,
  company: companyPage as PageData,
  news: newsPage as PageData,
  careers: careersPage as PageData,
  culture: culturePage as PageData,
  'master-plan': masterPlanPage as PageData,
  'terms-and-conditions': termsPage as PageData,
  'privacy-policy': privacyPage as PageData,
  'accessibility-statement': accessibilityPage as PageData,
}

export const PAGE_SLUGS = Object.keys(PAGE_REGISTRY)

export function getPageData(slug: string): PageData | undefined {
  return PAGE_REGISTRY[slug]
}
