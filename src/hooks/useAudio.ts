import { useRef } from 'react'

const useAudio = () => {
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio() : undefined
  )

  const play = (src: string) => {
    audio.current.volume = 0.4

    audio.current.src = src

    audio.current?.play()
  }

  return { play }
}

export default useAudio
