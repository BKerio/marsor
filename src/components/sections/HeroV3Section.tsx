import type { CmsAsset, CmsCta, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'
import { ActionLink } from './ActionLink'

interface HeroV3SectionProps {
  section: CmsSection
}

function getAsset(section: CmsSection, key: string): CmsAsset | null {
  const value = section[key]
  if (value && typeof value === 'object' && 'src' in value) {
    return value as CmsAsset
  }
  return null
}

export default function HeroV3Section({ section }: HeroV3SectionProps) {
  const anchorId = slugifyAnchor(String(section.id ?? section.heading ?? 'section'))
  const layout = String(section.layout ?? 'text aligned to left / cta aligned to right')
  const textContentMaxWidth = section.textContentMaxWidth
    ? `${Number(section.textContentMaxWidth) / 10}rem`
    : '45.2rem'

  const video = getAsset(section, 'video')
  const mobileVideo = getAsset(section, 'mobileVideo')
  const image = getAsset(section, 'image')
  const mobileImage = getAsset(section, 'mobileImage')
  const cta = section.cta as CmsCta | null | undefined
  const tag = section.tag as string | null | undefined
  const heading = section.heading as string | null | undefined
  const text = section.text as string | null | undefined

  return (
    <section
      className="section hero-v3"
      style={
        {
          '--hero-v3-text-content-max-width': textContentMaxWidth,
          '--hero-v3-scene-indicator-translate-x': '0rem',
          '--hero-v3-scene-indicator-width': '0rem',
        } as React.CSSProperties
      }
      data-size={section.size ?? 'cover'}
      data-layout={layout}
      data-mobile-layout={section.mobileLayout ?? 'text and cta aligned to bottom'}
      {...(video ? { 'data-has-video': 'true' } : {})}
      {...(image && !video ? { 'data-has-image': 'true' } : {})}
      {...(section.hasGradient ? { 'data-has-gradient': 'true' } : {})}
    >
      <div id={anchorId} className="section__anchor" />

      {(image || mobileImage) && (
        <div className="hero-v3__background">
          {image && (
            <img alt="" className="hero-v3__image" src={image.src} loading="lazy" />
          )}
          {mobileImage && (
            <img alt="" className="hero-v3__mobile-image" src={mobileImage.src} loading="lazy" />
          )}
        </div>
      )}

      {video && (
        <div className="hero-v3__video-background">
          <video
            className="hero-v3__video"
            src={video.src}
            disableRemotePlayback
            muted
            loop
            playsInline
            autoPlay
          />
          {mobileVideo && (
            <video
              className="hero-v3__mobile-video"
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

      <div className="hero-v3__content-wrapper">
        <div className="hero-v3__content">
          {tag && <span className="hero-v3__tag">{tag}</span>}
          <div className="hero-v3__description">
            {heading && <h1 className="hero-v3__heading">{heading}</h1>}
            {text && <p className="hero-v3__text">{text}</p>}
          </div>
          {cta && (
            <div className="hero-v3__actions">
              <ActionLink cta={cta} iconType={section.ctaIcon as string} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
