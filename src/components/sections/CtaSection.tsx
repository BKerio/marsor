import type { CmsCta, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'
import { ActionLink } from './ActionLink'

interface CtaSectionProps {
  section: CmsSection
}

export default function CtaSection({ section }: CtaSectionProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'cta'))
  const theme = (section.theme as string) ?? 'light'
  const cta = section.cta as CmsCta | null | undefined
  const secondaryCta = section.secondaryCta as CmsCta | null | undefined
  const kicker = section.kicker as string | null | undefined
  const heading = section.heading as string | null | undefined
  const description = section.description as string | null | undefined

  return (
    <section className="section cta-module" data-theme={theme}>
      <div id={anchorId} className="section__anchor" />
      <div className="cta-module__content">
        {kicker && <p className="cta-module__kicker">{kicker}</p>}
        {heading && <h2 className="cta-module__heading">{heading}</h2>}
        {description && <p className="cta-module__description">{description}</p>}
        <div className="cta-module__actions">
          {cta && <ActionLink cta={cta} />}
          {secondaryCta && <ActionLink cta={secondaryCta} />}
        </div>
      </div>
    </section>
  )
}
