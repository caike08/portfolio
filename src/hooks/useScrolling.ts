// React hook returning a boolean indicating if the user reached the desired breakpoint

import { useEffect, useState } from 'react'

export const useScrolling = (breakpoint: number) => {
  const [hasReachedBreakpoint, setHasReachedBreakpoint] = useState(false)

  useEffect(() => {
    const handleChange = () => {
      setHasReachedBreakpoint(window.scrollY > breakpoint)
    }

    // Sync with the current position on mount (e.g. page loaded already scrolled)
    handleChange()

    window.addEventListener('scroll', handleChange, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleChange)
    }
  }, [breakpoint])

  return hasReachedBreakpoint
}
