import type { CmsSection } from '../../types/cms'

interface CareersListingModuleProps {
  section: CmsSection
}

export default function CareersListingModule({ section }: CareersListingModuleProps) {
  const anchorId = 'careers-listing-v3'
  const heading = section.heading as string
  const description = section.description as string
  const disclaimer = section.disclaimer as string | undefined

  return (
    <section className="section careers-listing-module" id={anchorId} data-theme="light">
      <div className="section__anchor" id={`${anchorId}-anchor`} />
      <div className="careers-listing-module__content">
        <div className="careers-listing-module__heading-description">
          <h2 className="careers-listing-module__heading">{heading}</h2>
          <p className="careers-listing-module__description">{description}</p>
        </div>

        <div className="careers-listing-module__listings-container">
          <div className="careers-listing-module__listings">
            <p className="careers-listing-module__empty-state">
              Open roles are managed on{' '}
              <a href="https://www.figure.ai/careers" target="_blank" rel="noreferrer">
                figure.ai/careers
              </a>
              .
            </p>
          </div>
        </div>

        {disclaimer && (
          <p className="careers-listing-module__disclaimer">{disclaimer}</p>
        )}
      </div>
    </section>
  )
}
