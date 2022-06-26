import { useCallback, useContext, useState } from 'react'

import {
  finishNotification,
  finishSounds,
  specialFinishNotification,
  specialFinishSounds
} from 'config/pomodoro/gtaIV'

import { Games, Tabs } from 'contexts/pomodoro'
import NotificationsContext from 'contexts/notifications'

import useAudio from 'hooks/useAudio'
import useUtils from 'hooks/useUtils'

const usePomodoro = () => {
  const { play } = useAudio()

  const { pickRandomArrayElement } = useUtils()

  const { notify } = useContext(NotificationsContext)

  const [completedPomodoros, setCompletedPomodoros] = useState<number>(0)

  const [isCountingPomodoro, setIsCountingPomodoro] = useState<boolean>(false)

  const [isCountingShortBreak, setIsCountingShortBreak] =
    useState<boolean>(false)

  const [isCountingLongBreak, setIsCountingLongBreak] = useState<boolean>(false)

  const [selectedTab, setSelectedTab] = useState<Tabs>('POMODORO')

  const [selectedGame, setSelectedGame] = useState<Games>('GTA_IV')

  const onFinishPomodoro = useCallback(() => {
    if (completedPomodoros !== 0 && (completedPomodoros + 1) % 4 === 0) {
      play(pickRandomArrayElement(specialFinishSounds))

      notify(specialFinishNotification)

      setSelectedTab('LONG_BREAK')
    } else {
      play(pickRandomArrayElement(finishSounds))

      notify(finishNotification)

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
    setSelectedTab,
    selectedGame,
    setSelectedGame
  }
}

export default usePomodoro
