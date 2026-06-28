import HeroV3 from '../components/HeroV3'
import { HERO_SECTIONS } from '../data/content'

export default function HomePage() {
  return (
    <main>
      {HERO_SECTIONS.map((section) => (
        <HeroV3 key={section.anchorId} section={section} />
      ))}
    </main>
  )
}
