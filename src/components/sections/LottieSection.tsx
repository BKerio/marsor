import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import type { CmsAsset, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'

interface LottieSectionProps {
  section: CmsSection
}

function getAsset(section: CmsSection, key: string): CmsAsset | null {
  const value = section[key]
  if (value && typeof value === 'object' && 'src' in value) {
    return value as CmsAsset
  }
  return null
}

export default function LottieSection({ section }: LottieSectionProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'lottie'))
  const desktop = getAsset(section, 'lottieFile')
  const mobile = getAsset(section, 'mobileLottieFile')
  const theme = (section.theme as string) ?? 'light'

  const [desktopData, setDesktopData] = useState<object | null>(null)
  const [mobileData, setMobileData] = useState<object | null>(null)

  useEffect(() => {
    if (desktop?.src) {
      fetch(desktop.src)
        .then((res) => res.json())
        .then(setDesktopData)
        .catch(() => setDesktopData(null))
    }
    if (mobile?.src) {
      fetch(mobile.src)
        .then((res) => res.json())
        .then(setMobileData)
        .catch(() => setMobileData(null))
    }
  }, [desktop?.src, mobile?.src])

  return (
    <section className="section lottie-module" data-theme={theme}>
      <div id={anchorId} className="section__anchor" />
      <div className="lottie-module__content">
        {desktopData && (
          <div className="lottie-module__animation lottie-module__animation--desktop">
            <Lottie animationData={desktopData} loop autoplay />
          </div>
        )}
        {mobileData && (
          <div className="lottie-module__animation lottie-module__animation--mobile">
            <Lottie animationData={mobileData} loop autoplay />
          </div>
        )}
      </div>
    </section>
  )
}
