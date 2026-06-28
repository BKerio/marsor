import { Navigate, useParams } from 'react-router-dom'
import SectionRenderer from '../components/sections/SectionRenderer'
import { getPageData } from '../data/pageRegistry'

export default function CmsPage() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? getPageData(slug) : undefined

  if (!page) {
    return <Navigate to="/" replace />
  }

  return (
    <main>
      {page.sections.map((section) => (
        <SectionRenderer key={section.sys?.id ?? section.id ?? section.__typename} section={section} />
      ))}
    </main>
  )
}
