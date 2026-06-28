import { useEffect, useRef, useState } from 'react'

export function useNavigationScroll() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrollingBack, setIsScrollingBack] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 10)
      setIsScrollingBack(y < lastScrollY.current)
      lastScrollY.current = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { isScrolled, isScrollingBack }
}
