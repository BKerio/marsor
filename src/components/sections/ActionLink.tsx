import type { CmsCta } from '../../types/cms'
import { resolveCtaHref } from '../../utils/cta'

function DiagonalArrow() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="action__icon"
      data-icon-type="diagonal-arrow"
    >
      <path d="M0.75 11.75L11.25 1.25M11.25 1.25H0.75M11.25 1.25V11.75" stroke="currentcolor" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="action__icon"
      data-icon-type="arrow-down"
    >
      <path d="M6 11.25V1.25M6 11.25L1.25 6.5M6 11.25L10.75 6.5" stroke="currentcolor" />
    </svg>
  )
}

interface ActionLinkProps {
  cta: CmsCta
  iconType?: string | null
}

export function ActionLink({ cta, iconType }: ActionLinkProps) {
  const href = resolveCtaHref(cta)
  if (!href || !cta.label) return null

  const external = Boolean(cta.isTargetBlank || cta.url)
  const icon =
    iconType === 'arrow down' || iconType === 'arrow-down' ? <ArrowDown /> : <DiagonalArrow />

  return (
    <a
      title={cta.label}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="action">
        <span className="action__label">
          {cta.label}
          {icon}
        </span>
        <span className="action__loader-wrapper">
          <span className="action__loader" />
        </span>
      </span>
    </a>
  )
}
