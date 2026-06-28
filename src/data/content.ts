export const NAV_LINKS = [
  { label: 'FIGURE 03', href: '/figure' },
  { label: 'HELIX', href: '/helix' },
  { label: 'COMPANY', href: '/company' },
  { label: 'NEWS', href: '/news' },
  { label: 'CAREERS', href: '/careers' },
] as const

export const FOOTER_LINKS = [
  { label: 'FIGURE 03', href: '/figure' },
  { label: 'COMPANY', href: '/company' },
  { label: 'CAREERS', href: '/careers' },
  { label: 'HELIX', href: '/helix' },
  { label: 'NEWS', href: '/news' },
  { label: 'CULTURE', href: '/culture' },
  { label: 'MASTER PLAN', href: '/master-plan' },
] as const

export const FOOTER_EXTENSION_BG =
  'https://images.ctfassets.net/qx5k8y1u9drj/VVC0MrP2b4i0eC7jVaNyc/fb1b20a57c15495fc4ec0d37a7e8197c/extended-footer-background-v2.jpg?fm=webp&w=3840&q=70'

export const FOOTER_LOGO =
  'https://images.ctfassets.net/qx5k8y1u9drj/3ygvPaiOiIX62OhZ7oNO2h/d50ccd3bc449eab7ae098d87aa0cd040/figure-logo.svg'

export type HeroLayout =
  | 'text aligned to left / cta aligned to right'
  | 'text aligned to right / cta aligned to left'
  | 'text aligned to left / cta aligned to left'

export interface HeroSectionData {
  anchorId: string
  layout: HeroLayout
  hasGradient?: boolean
  heading: string
  text: string
  video?: string
  mobileVideo?: string
  cta: {
    label: string
    href: string
    external?: boolean
  }
}

export const HERO_SECTIONS: HeroSectionData[] = [
  {
    anchorId: 'the-future-of-home-help-is-here',
    layout: 'text aligned to left / cta aligned to right',
    hasGradient: true,
    heading: 'The future of home help is here',
    text: 'Figure 03 is a general purpose humanoid robot for every day.',
    video:
      'https://videos.ctfassets.net/qx5k8y1u9drj/2fyl7BnOtv5uyHkmWmnrQv/f9d9a70af813f0099d4a649b6748ec1a/homepage-01.mp4',
    mobileVideo:
      'https://videos.ctfassets.net/qx5k8y1u9drj/2fVvlCNzoJ4KbpcvLkXodq/34459d6f89a26f547929aed8a3f89007/homepage-01-mobile.mp4',
    cta: {
      label: 'Full Video',
      href: 'https://www.youtube.com/watch?v=Eu5mYMavctM',
      external: true,
    },
  },
  {
    anchorId: 'the-intelligence-behind-figure-03',
    layout: 'text aligned to left / cta aligned to right',
    hasGradient: true,
    heading: 'The intelligence behind Figure\u00a003',
    text: 'Figure is using Helix, AI that enables it to navigate unpredictable, ever-changing home environments. ',
    video:
      'https://videos.ctfassets.net/qx5k8y1u9drj/4C1XYI0dgotwsWGFYbw6g0/c48f7b8f97ce88242148751eb3a81180/homepage-02.mp4',
    mobileVideo:
      'https://videos.ctfassets.net/qx5k8y1u9drj/6Jj7O2YwcJL735n94hQ02l/7171154c3f9b7d21f4f7f1c773bd381b/homepage-02-mobile.mp4',
    cta: { label: 'Explore Helix', href: '/helix' },
  },
  {
    anchorId: 'understands-your-home-like-you-do-2',
    layout: 'text aligned to right / cta aligned to left',
    heading: 'Understands your home like you do',
    text: 'Human-shaped and AI-powered, Figure handles household tasks the way you would.',
    video:
      'https://videos.ctfassets.net/qx5k8y1u9drj/5G8xXfsZV0lbr351WLUwPd/a787f09545493071364ebfdd908349a4/homepage-03.mp4',
    cta: { label: 'Explore Figure 03', href: '/figure' },
  },
]

export const FOOTER_EXTENSION: HeroSectionData = {
  anchorId: 'footerextension',
  layout: 'text aligned to left / cta aligned to left',
  heading: 'The team bringing impossible ideas to life',
  text: 'Figure has attracted the world\u2019s leading robotics team with over 100 years of combined AI & humanoid experience.',
  cta: { label: 'Careers', href: '/careers' },
}
