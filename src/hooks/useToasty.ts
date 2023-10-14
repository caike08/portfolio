import { useEffect, useState } from 'react';

// import.meta meta-property exposes context-specific metadata to a JavaScript module.
// It contains information about the module, such as the module's URL.
// toasty.mp3 is deployed to gh-pages, but isn't loaded directly.
// based on: https://github.com/krau5/pomo/pull/9/commits/14866f670e2b5c63689beb75387c16157d636134
const soundURL = new URL('/toasty.mp3', import.meta.url) // TODO: find a better way to import the mp3 file

const useToasty = (animationDuration: number) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio(soundURL.href))
  }, [])

  return {
    isPlayingToasty: playing,
    toasty: () => {
      if (playing) {
        return
      }
      setPlaying(true)
      void audio!.play()
      setTimeout(() => setPlaying(false), animationDuration)
    },
  }
}

export default useToasty
