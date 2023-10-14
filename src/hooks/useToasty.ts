import { useEffect, useState } from 'react';

const useToasty = (animationDuration: number) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio('/toasty.mp3'))
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
