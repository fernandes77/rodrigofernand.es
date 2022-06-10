import { useCallback, useContext, useState } from 'react'

import PomodoroCounterTabs from 'components/_Pomodoro/PomodoroCounterTabs'
import PomodoroCounter from 'components/_Pomodoro/PomodoroCounter'

import PomodoroContext, { Tabs } from 'contexts/pomodoro'

import * as S from './styles'

const PomodoroBox = () => {
  const {
    isCountingPomodoro,
    isCountingShortBreak,
    isCountingLongBreak,
    setIsCountingPomodoro,
    setIsCountingShortBreak,
    setIsCountingLongBreak,
    selectedTab,
    setSelectedTab
  } = useContext(PomodoroContext)

  const isCountingAny = useCallback(
    () => isCountingPomodoro || isCountingShortBreak || isCountingLongBreak,
    [isCountingPomodoro, isCountingShortBreak, isCountingLongBreak]
  )

  const resetCounts = useCallback(() => {
    setIsCountingPomodoro(false)
    setIsCountingShortBreak(false)
    setIsCountingLongBreak(false)
  }, [setIsCountingPomodoro, setIsCountingShortBreak, setIsCountingLongBreak])

  const changeTab = useCallback(
    (tab: Tabs) => {
      if (isCountingAny()) {
        if (!confirm('Are you sure you want to switch?')) return
      }

      resetCounts()

      setSelectedTab(tab)
    },
    [isCountingAny, setSelectedTab, resetCounts]
  )

  return (
    <S.Wrapper>
      <PomodoroCounterTabs selectedTab={selectedTab} changeTab={changeTab} />

      <S.TimerWrapper>
        <PomodoroCounter />
      </S.TimerWrapper>
    </S.Wrapper>
  )
}

export default PomodoroBox
