import { useEffect, useRef, useState } from 'react'

// toasty.mp3 lives under src/assets: referencing it with a relative URL lets
// Vite resolve, hash and include the asset in dev and production builds.
const soundURL = new URL('../assets/toasty.mp3', import.meta.url)

const useToasty = (animationDuration: number) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audioRef.current ??= new Audio(soundURL.href)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      audioRef.current?.pause()
    }
  }, [])

  const toasty = () => {
    if (playing) {
      return
    }

    setPlaying(true)
    void audioRef.current?.play()
    timeoutRef.current = setTimeout(() => setPlaying(false), animationDuration)
  }

  return {
    isPlayingToasty: playing,
    toasty,
  }
}

export default useToasty
