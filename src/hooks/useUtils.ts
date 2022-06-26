import { useCallback } from 'react'

const useUtils = () => {
  const pickRandomArrayElement = useCallback((arr: any[]): any => {
    return arr[Math.floor(Math.random() * arr.length)]
  }, [])

  return { pickRandomArrayElement }
}

export default useUtils
