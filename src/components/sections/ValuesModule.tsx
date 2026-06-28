import type { CmsCta, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'
import { ActionLink } from './ActionLink'

interface ValuesModuleProps {
  section: CmsSection
}

export default function ValuesModule({ section }: ValuesModuleProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'values'))
  const items =
    (section.itemsCollection as { items?: { heading: string; description: string }[] })?.items ?? []
  const cta = section.cta as CmsCta | null | undefined
  const kicker = section.kicker as string | null | undefined
  const heading = section.heading as string

  return (
    <section className="section values-module" data-theme="dark">
      <div id={anchorId} className="section__anchor" />
      <div className="values-module__content">
        {kicker && <p className="values-module__kicker">{kicker}</p>}
        <h2 className="values-module__heading">{heading}</h2>
        <ul className="values-module__items">
          {items.map((item) => (
            <li key={item.heading} className="values-module__item">
              <h3 className="values-module__item-heading">{item.heading}</h3>
              <p className="values-module__item-description">{item.description}</p>
            </li>
          ))}
        </ul>
        {cta && (
          <div className="values-module__actions">
            <ActionLink cta={cta} />
          </div>
        )}
      </div>
    </section>
  )
}
