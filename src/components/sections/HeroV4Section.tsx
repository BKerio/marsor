import type { CmsAsset, CmsCta, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'
import { ActionLink } from './ActionLink'

interface HeroV4SectionProps {
  section: CmsSection
}

function getAsset(section: CmsSection, key: string): CmsAsset | null {
  const value = section[key]
  if (value && typeof value === 'object' && 'src' in value) {
    return value as CmsAsset
  }
  return null
}

export default function HeroV4Section({ section }: HeroV4SectionProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'hero'))
  const video = getAsset(section, 'video')
  const mobileVideo = getAsset(section, 'mobileVideo')
  const logoImage = getAsset(section, 'logoImage')
  const cta = section.cta as CmsCta | null | undefined
  const text = section.text as string | null | undefined

  return (
    <section className="section hero-v4" data-theme="dark">
      <div id={anchorId} className="section__anchor" />

      <div className="hero-v4__media">
        {video && (
          <div className="hero-v4__video-wrapper">
            <video
              className="hero-v4__video"
              src={video.src}
              disableRemotePlayback
              muted
              loop
              playsInline
              autoPlay
            />
            {mobileVideo && (
              <video
                className="hero-v4__mobile-video"
                src={mobileVideo.src}
                disableRemotePlayback
                muted
                loop
                playsInline
                autoPlay
              />
            )}
          </div>
        )}
      </div>

      <div className="hero-v4__content">
        <div className="hero-v4__description">
          {logoImage && (
            <div className="hero-v4__logo-image-wrapper">
              <img
                alt=""
                className="hero-v4__logo-image"
                src={logoImage.src}
                width={logoImage.width ?? undefined}
                height={logoImage.height ?? undefined}
              />
            </div>
          )}
          {text && <p className="hero-v4__text">{text}</p>}
        </div>
        {cta && (
          <div className="hero-v4__actions">
            <ActionLink cta={cta} iconType={section.ctaIcon as string} />
          </div>
        )}
      </div>
    </section>
  )
}
