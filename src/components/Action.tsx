interface ActionProps {
  label: string
  href: string
  external?: boolean
}

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
      <path
        d="M0.75 11.75L11.25 1.25M11.25 1.25H0.75M11.25 1.25V11.75"
        stroke="currentcolor"
      />
    </svg>
  )
}

export default function Action({ label, href, external }: ActionProps) {
  return (
    <a
      title={label}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="action">
        <span className="action__label">
          {label}
          <DiagonalArrow />
        </span>
        <span className="action__loader-wrapper">
          <span className="action__loader" />
        </span>
      </span>
    </a>
  )
}
