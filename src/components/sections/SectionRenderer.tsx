import type { CmsSection } from '../../types/cms'
import HeroV3Section from './HeroV3Section'
import HeroV4Section from './HeroV4Section'
import HumanFormModule from './HumanFormModule'
import CtaSection from './CtaSection'
import ValuesModule from './ValuesModule'
import ArticleList from './ArticleList'
import CareersListingModule from './CareersListingModule'
import RichTextPageContent from './RichTextPageContent'
import LegalContent from './LegalContent'
import LottieSection from './LottieSection'
import VideoCarousel from './VideoCarousel'

interface SectionRendererProps {
  section: CmsSection
}

export default function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.__typename) {
    case 'HeroV3':
      return <HeroV3Section section={section} />
    case 'HeroV4':
      return <HeroV4Section section={section} />
    case 'HumanFormModule':
      return <HumanFormModule section={section} />
    case 'Cta':
      return <CtaSection section={section} />
    case 'ValuesModule':
      return <ValuesModule section={section} />
    case 'ArticleList':
      return <ArticleList section={section} />
    case 'CareersListingModule':
      return <CareersListingModule section={section} />
    case 'RichTextPageContent':
      return <RichTextPageContent section={section} />
    case 'LegalContent':
      return <LegalContent section={section} />
    case 'Lottie':
      return <LottieSection section={section} />
    case 'VideoCarousel':
      return <VideoCarousel section={section} />
    default:
      return null
  }
}
