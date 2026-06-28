import { useState } from 'react'
import type { CmsAsset, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'

interface CarouselItem {
  title: string
  iFrameEmbedCode?: string
  image?: CmsAsset | null
  videoThumbnail?: CmsAsset | null
}

interface VideoCarouselProps {
  section: CmsSection
}

function extractYoutubeSrc(embed?: string): string | null {
  if (!embed) return null
  const match = embed.match(/src="([^"]+)"/)
  return match?.[1] ?? null
}

export default function VideoCarousel({ section }: VideoCarouselProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'video-carousel'))
  const theme = (section.theme as string) ?? 'dark'
  const items =
    (section.videoCarouselItemCollection as { items?: CarouselItem[] })?.items ?? []
  const kicker = section.kicker as string | null | undefined
  const heading = section.heading as string | null | undefined
  const [activeIndex, setActiveIndex] = useState(0)
  const active = items[activeIndex]

  return (
    <section className="section video-carousel" data-theme={theme}>
      <div id={anchorId} className="section__anchor" />

      <div className="video-carousel__content">
        {kicker && <p className="video-carousel__kicker">{kicker}</p>}
        {heading && <h2 className="video-carousel__heading">{heading}</h2>}

        <div className="video-carousel__main">
          <div className="video-carousel__media">
            {active?.videoThumbnail ? (
              <video
                className="video-carousel__thumbnail-video"
                src={active.videoThumbnail.src}
                muted
                loop
                playsInline
                autoPlay
              />
            ) : active?.image ? (
              <img
                alt=""
                className="video-carousel__image"
                src={active.image.src}
                loading="lazy"
              />
            ) : null}

            {extractYoutubeSrc(active?.iFrameEmbedCode) && (
              <iframe
                className="video-carousel__iframe"
                src={extractYoutubeSrc(active?.iFrameEmbedCode) ?? undefined}
                title={active?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          <ul className="video-carousel__items">
            {items.map((item, index) => (
              <li key={item.title}>
                <button
                  type="button"
                  className={`video-carousel__item${index === activeIndex ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
