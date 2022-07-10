import { useCallback, useEffect, useState } from 'react'

import { randomAdviceService } from 'services/randomAdvice'

export const useRandomAdvice = () => {
  const [advice, setAdvice] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const onShowAdvice = useCallback(() => {
    setLoading(true)

    setTimeout(async () => {
      try {
        const adviceResponse = await randomAdviceService.get('advice')

        setAdvice(adviceResponse.data.slip.advice)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }, 1000)
  }, [])

  useEffect(() => {
    onShowAdvice()
  }, [onShowAdvice])

  return { advice, loading, onShowAdvice }
}
