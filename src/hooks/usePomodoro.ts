import { useCallback, useState } from 'react'

import {
  finishNotificationBody,
  finishNotificationTitle,
  finishSounds,
  specialFinishNotificationBody,
  specialFinishNotificationTitle,
  specialFinishSounds
} from 'config/pomodoro/gtaIV'

import { Games, Tabs } from 'contexts/pomodoro'

import useAudio from 'hooks/useAudio'
import useUtils from 'hooks/useUtils'
import useNotifications from 'hooks/useNotifications'

const usePomodoro = () => {
  const { play } = useAudio()

  const { pickRandomArrayElement } = useUtils()

  const { notify } = useNotifications()

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

      notify(specialFinishNotificationTitle, specialFinishNotificationBody)

      setSelectedTab('LONG_BREAK')
    } else {
      play(pickRandomArrayElement(finishSounds))

      notify(finishNotificationTitle, finishNotificationBody)

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
