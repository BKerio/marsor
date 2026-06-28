import type { ReactNode } from 'react'
import type { RichTextField, RichTextNode } from '../types/cms'

function renderMarks(text: string, marks?: { type: string }[]): ReactNode {
  if (!marks?.length) return text
  return marks.reduce<ReactNode>((node, mark) => {
    switch (mark.type) {
      case 'bold':
        return <strong className="rich-text-bold">{node}</strong>
      case 'italic':
        return <em className="rich-text-italic">{node}</em>
      case 'underline':
        return <u>{node}</u>
      default:
        return node
    }
  }, text)
}

function renderNode(node: RichTextNode, key: number): ReactNode {
  if (node.nodeType === 'text') {
    const lines = (node.value ?? '').split('\n')
    return lines.map((line, index) => (
      <span key={`${key}-${index}`}>
        {index > 0 && <br />}
        {renderMarks(line, node.marks)}
      </span>
    ))
  }

  const children = node.content?.map((child, index) => renderNode(child, index))

  switch (node.nodeType) {
    case 'document':
      return <>{children}</>
    case 'paragraph':
      return (
        <p key={key} className="rich-text-paragraph">
          {children}
        </p>
      )
    case 'heading-1':
      return (
        <h1 key={key} className="rich-text-heading">
          {children}
        </h1>
      )
    case 'heading-2':
      return (
        <h2 key={key} className="rich-text-heading" id={slugFromHeading(node)}>
          <span className="rich-text-heading-anchor" />
          {children}
        </h2>
      )
    case 'heading-3':
      return (
        <h3 key={key} className="rich-text-heading">
          {children}
        </h3>
      )
    case 'heading-4':
      return (
        <h4 key={key} className="rich-text-heading">
          {children}
        </h4>
      )
    case 'unordered-list':
      return (
        <ul key={key} className="rich-text-list">
          {children}
        </ul>
      )
    case 'ordered-list':
      return (
        <ol key={key} className="rich-text-list rich-text-list--ordered">
          {children}
        </ol>
      )
    case 'list-item':
      return (
        <li key={key} className="rich-text-list-item">
          {children}
        </li>
      )
    case 'hyperlink':
      return (
        <a
          key={key}
          href={(node.data?.uri as string) ?? '#'}
          className="rich-text-link"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )
    case 'hr':
      return <hr key={key} className="rich-text-hr" />
    default:
      return <div key={key}>{children}</div>
  }
}

function slugFromHeading(node: RichTextNode): string | undefined {
  const text = node.content?.map((c) => c.value ?? '').join('').trim()
  if (!text) return undefined
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

export function renderRichText(field?: RichTextField | null): ReactNode {
  if (!field?.json) return null
  return renderNode(field.json as RichTextNode, 0)
}

export function renderGradientHeading(field?: RichTextField | null): ReactNode {
  if (!field?.json?.content?.[0]?.content) return null
  const parts = field.json.content[0].content as RichTextNode[]
  return (
    <>
      {parts.map((part, index) =>
        part.marks?.some((m) => m.type === 'bold') ? (
          <span key={index} className="gradient-rich-text__gradient-text">
            {part.value}
          </span>
        ) : (
          <span key={index} className="gradient-rich-text__heading-text">
            {part.value}
          </span>
        ),
      )}
    </>
  )
}

export function formatDate(date?: string | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
