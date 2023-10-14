// React hook to return a boolean indicating if the user reached the desired breakpoint

import { useEffect, useState } from 'react'

export const useScrolling = (breakpoint: number) => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > breakpoint)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolling, breakpoint])

  return isScrolling
}
