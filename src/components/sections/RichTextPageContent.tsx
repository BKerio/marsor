import type { CmsAsset, CmsSection, RichTextField } from '../../types/cms'
import { formatDate, renderGradientHeading, renderRichText } from '../../utils/richText'
import { slugifyAnchor } from '../../utils/cta'
import { ActionLink } from './ActionLink'
import type { CmsCta } from '../../types/cms'

interface RichTextPageContentProps {
  section: CmsSection
}

interface Author {
  fullName?: string
  title?: string
  image?: CmsAsset
  signature?: CmsAsset
}

export default function RichTextPageContent({ section }: RichTextPageContentProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'content'))
  const author = section.author as Author | undefined
  const kicker = section.kicker as string | undefined
  const description = section.description as string | undefined
  const date = section.date as string | undefined
  const sideNav =
    (section.sideNavigationLinksCollection as { items?: { heading: string; id: string }[] })
      ?.items ?? []
  const cta = section.cta as CmsCta | null | undefined

  return (
    <section className="section rich-text-page-content" data-theme="light">
      <div id={anchorId} className="section__anchor" />

      <div className="rich-text-page-content__inner">
        <div className="rich-text-page-content__intro">
          <div className="rich-text-page-content__intro-inner">
            {kicker && (
              <p className="rich-text-page-content__kicker">{kicker}</p>
            )}
            <h1 className="rich-text-page-content__heading">
              {renderGradientHeading(section.richTextHeading as RichTextField)}
            </h1>

            <div className="rich-text-page-content__meta-info">
              {author?.fullName && (
                <p className="rich-text-page-content__meta-info-author">
                  {author.fullName}
                  {author.title ? `, ${author.title}` : ''}
                </p>
              )}
              {date && (
                <p className="rich-text-page-content__meta-info-published">
                  {formatDate(date)}
                </p>
              )}
            </div>

            {description && (
              <p className="rich-text-page-content__description">{description}</p>
            )}

            {cta && (
              <div className="rich-text-page-content__cta">
                <ActionLink cta={cta} />
              </div>
            )}
          </div>
        </div>

        <div className="rich-text-page-content__content">
          <div className="rich-text-page-content__content-inner">
            {sideNav.length > 0 && (
              <nav className="rich-text-page-content__side-navigation" aria-label="Page sections">
                <ul>
                  {sideNav.map((link) => (
                    <li key={link.id}>
                      <a href={`#${link.id}`}>{link.heading}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="rich-text-page-content__rich-text-area">
              {renderRichText(section.content as RichTextField)}
            </div>

            {author && (
              <div className="rich-text-page-content__article-author-container">
                {author.image && (
                  <img
                    alt={author.fullName ?? ''}
                    className="rich-text-page-content__author-image"
                    src={author.image.src}
                    loading="lazy"
                  />
                )}
                <div>
                  {author.fullName && (
                    <p className="rich-text-page-content__author-name">{author.fullName}</p>
                  )}
                  {author.title && (
                    <p className="rich-text-page-content__author-title">{author.title}</p>
                  )}
                  {author.signature && (
                    <img
                      alt=""
                      className="rich-text-page-content__author-signature"
                      src={author.signature.src}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
