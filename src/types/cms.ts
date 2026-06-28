export interface CmsAsset {
  contentType?: string
  src: string
  width?: number | null
  height?: number | null
  description?: string
}

export interface CmsCta {
  icon?: string | null
  label?: string | null
  url?: string | null
  fragmentAndQueryString?: string | null
  isTargetBlank?: boolean
  internalLink?: {
    __typename?: string
    slug?: string
  } | null
}

export interface CmsSection {
  sys?: { id: string }
  __typename: string
  id?: string
  [key: string]: unknown
}

export interface PageData {
  slug: string
  title?: string | null
  description?: string | null
  isExtendedFooterEnabled?: boolean | null
  extendedFooterHeading?: string | null
  extendedFooterText?: string | null
  extendedFooterImage?: CmsAsset | null
  extendedFooterCta?: CmsCta | null
  sections: CmsSection[]
}

export interface RichTextDocument {
  nodeType: string
  data?: Record<string, unknown>
  content?: RichTextNode[]
  value?: string
  marks?: { type: string }[]
}

export interface RichTextNode {
  nodeType: string
  data?: Record<string, unknown>
  content?: RichTextNode[]
  value?: string
  marks?: { type: string }[]
}

export interface RichTextField {
  json: RichTextDocument
  links?: Record<string, unknown>
}
