import type { CmsAsset, CmsSection } from '../../types/cms'
import { slugifyAnchor } from '../../utils/cta'

interface HumanFormModuleProps {
  section: CmsSection
}

function getAsset(section: CmsSection, key: string): CmsAsset | null {
  const value = section[key]
  if (value && typeof value === 'object' && 'src' in value) {
    return value as CmsAsset
  }
  return null
}

export default function HumanFormModule({ section }: HumanFormModuleProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'human-form'))
  const imageDesktop = getAsset(section, 'imageDesktop')
  const imageMobile = getAsset(section, 'image')
  const items =
    (section.itemsCollection as { items?: { title: string; description: string }[] })?.items ?? []

  return (
    <section className="section human-form-module" data-theme="dark">
      <div id={anchorId} className="section__anchor" />

      <div className="human-form-module__background">
        {imageDesktop && (
          <img alt="" className="human-form-module__image" src={imageDesktop.src} loading="lazy" />
        )}
        {imageMobile && (
          <img
            alt=""
            className="human-form-module__mobile-image"
            src={imageMobile.src}
            loading="lazy"
          />
        )}
      </div>

      <div className="human-form-module__content">
        <div className="human-form-module__introduction">
          <div className="human-form-module__introduction-text-wrapper">
            <p className="human-form-module__introduction-text">
              <span className="human-form-module__heading">{section.heading as string}</span>
              <span className="human-form-module__description">{section.description as string}</span>
            </p>
          </div>
        </div>

        <ul className="human-form-module__items">
          {items.map((item) => (
            <li key={item.title} className="human-form-item">
              <span className="human-form-item__title">{item.title}</span>
              <span className="human-form-item__description">{item.description}</span>
            </li>
          ))}
        </ul>

        <div className="human-form-module__bottom">
          <h2 className="human-form-module__secondary-heading">
            {section.secondaryHeading as string}
          </h2>
          <p className="human-form-module__secondary-text">{section.secondaryText as string}</p>
        </div>
      </div>
    </section>
  )
}
