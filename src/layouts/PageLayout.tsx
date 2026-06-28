import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FOOTER_EXTENSION } from '../data/content'
import { getPageData } from '../data/pageRegistry'
import { resolveCtaHref } from '../utils/cta'
import type { FooterExtensionConfig } from '../components/Footer'
import type { PageData } from '../types/cms'

function getFooterExtension(page?: PageData): FooterExtensionConfig | null {
  if (!page?.isExtendedFooterEnabled || !page.extendedFooterHeading) {
    return null
  }

  const cta = page.extendedFooterCta
  const href = resolveCtaHref(cta) ?? '/careers'

  return {
    anchorId: 'footerextension',
    layout: 'text aligned to left / cta aligned to left',
    heading: page.extendedFooterHeading,
    text: page.extendedFooterText ?? '',
    cta: {
      label: cta?.label ?? 'Careers',
      href,
      external: Boolean(cta?.isTargetBlank || cta?.url),
    },
    backgroundImage: page.extendedFooterImage?.src
      ? `${page.extendedFooterImage.src}?fm=webp&w=3840&q=70`
      : undefined,
  }
}

export default function PageLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const slug = isHome ? null : location.pathname.replace(/^\//, '')
  const page = slug ? getPageData(slug) : undefined

  const extension = isHome ? FOOTER_EXTENSION : getFooterExtension(page)
  const showExtension = isHome || Boolean(page?.isExtendedFooterEnabled)

  useEffect(() => {
    const title = isHome ? 'Figure' : (page?.title ?? 'Figure')
    document.title = title.includes('Figure') ? title : `${title} | Figure`
    if (page?.description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, isHome, page?.title, page?.description])

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer extension={extension} showExtension={showExtension} />
    </>
  )
}
