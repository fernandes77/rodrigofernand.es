import { useCallback } from 'react'

const useFormatting = () => {
  const formatTimeForTimer = useCallback((timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds - minutes * 60

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }, [])

  return { formatTimeForTimer }
}

export default useFormatting
