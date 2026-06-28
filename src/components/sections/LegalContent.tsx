import type { CmsSection, RichTextField } from '../../types/cms'
import { formatDate, renderGradientHeading, renderRichText } from '../../utils/richText'
import { slugifyAnchor } from '../../utils/cta'

interface LegalContentProps {
  section: CmsSection
}

export default function LegalContent({ section }: LegalContentProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'legal'))
  const date = section.date as string | undefined

  return (
    <section className="section legal-content" data-theme="light">
      <div id={anchorId} className="section__anchor" />

      <div className="legal-content__inner">
        <h1 className="legal-content__heading">
          {renderGradientHeading(section.richTextHeading as RichTextField)}
        </h1>

        {date && (
          <p className="legal-content__modified-at">
            Last updated: {formatDate(date)}
          </p>
        )}

        <div className="legal-content__content">
          {renderRichText(section.content as RichTextField)}
        </div>
      </div>
    </section>
  )
}
