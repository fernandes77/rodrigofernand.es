import { useCallback, useState } from 'react'

import { Tabs } from 'contexts/pomodoro'

const usePomodoro = () => {
  const [completedPomodoros, setCompletedPomodoros] = useState<number>(0)

  const [isCountingPomodoro, setIsCountingPomodoro] = useState<boolean>(false)

  const [isCountingShortBreak, setIsCountingShortBreak] =
    useState<boolean>(false)

  const [isCountingLongBreak, setIsCountingLongBreak] = useState<boolean>(false)

  const [selectedTab, setSelectedTab] = useState<Tabs>('POMODORO')

  const onFinishPomodoro = useCallback(() => {
    if (completedPomodoros !== 0 && (completedPomodoros + 1) % 4 === 0) {
      setSelectedTab('LONG_BREAK')
    } else {
      setSelectedTab('SHORT_BREAK')
    }

    setCompletedPomodoros(completedPomodoros + 1)
  }, [completedPomodoros, setSelectedTab, setCompletedPomodoros])

  return {
    completedPomodoros,
    setCompletedPomodoros,
    isCountingPomodoro,
    setIsCountingPomodoro,
    isCountingShortBreak,
    setIsCountingShortBreak,
    isCountingLongBreak,
    setIsCountingLongBreak,
    onFinishPomodoro,
    selectedTab,
    setSelectedTab
  }
}

export default usePomodoro
