import type { HeroSectionData } from '../data/content'
import Action from './Action'

interface HeroV3Props {
  section: HeroSectionData
  className?: string
}

export default function HeroV3({ section, className = '' }: HeroV3Props) {
  const {
    anchorId,
    layout,
    hasGradient,
    heading,
    text,
    video,
    mobileVideo,
    cta,
  } = section

  return (
    <section
      className={`section hero-v3 ${className}`.trim()}
      style={
        {
          '--hero-v3-text-content-max-width': '45.2rem',
          '--hero-v3-scene-indicator-translate-x': '0rem',
          '--hero-v3-scene-indicator-width': '0rem',
        } as React.CSSProperties
      }
      data-size="cover"
      data-layout={layout}
      data-mobile-layout="text and cta aligned to bottom"
      {...(video ? { 'data-has-video': 'true' } : {})}
      {...(hasGradient ? { 'data-has-gradient': 'true' } : {})}
    >
      <div id={anchorId} className="section__anchor" />

      {video && (
        <div className="hero-v3__video-background">
          <video
            className="hero-v3__video"
            src={video}
            disableRemotePlayback
            muted
            loop
            playsInline
            autoPlay
          />
          {mobileVideo && (
            <video
              className="hero-v3__mobile-video"
              src={mobileVideo}
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
          <div className="hero-v3__description">
            <h1 className="hero-v3__heading">{heading}</h1>
            <p className="hero-v3__text">{text}</p>
          </div>
          <div className="hero-v3__actions">
            <Action label={cta.label} href={cta.href} external={cta.external} />
          </div>
        </div>
      </div>
    </section>
  )
}
