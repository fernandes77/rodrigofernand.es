import { useCallback, useContext, useEffect, useState } from 'react'

import {
  finishBreakNotificationBody,
  finishBreakNotificationTitle,
  finishBreakSound,
  resetSound,
  startSound,
  stopSound
} from 'config/pomodoro/gtaIV'

import Button from 'components/Button'

import useFormatting from 'hooks/useFormatting'
import useAudio from 'hooks/useAudio'
import useNotifications from 'hooks/useNotifications'

import PomodoroContext from 'contexts/pomodoro'

import * as S from './styles'

const PomodoroCounter = () => {
  const { play } = useAudio()

  const {
    isCountingPomodoro,
    setIsCountingPomodoro,
    isCountingShortBreak,
    setIsCountingShortBreak,
    isCountingLongBreak,
    setIsCountingLongBreak,
    onFinishPomodoro,
    selectedTab,
    setSelectedTab
  } = useContext(PomodoroContext)

  /* const { notify } = useNotifications() */

  const [showButtons, setShowButtons] = useState<boolean>(false)

  const mapper = {
    POMODORO: {
      totalTime: 1500,
      isCounting: isCountingPomodoro,
      setIsCounting: setIsCountingPomodoro,
      finish: onFinishPomodoro
    },
    SHORT_BREAK: {
      totalTime: 300,
      isCounting: isCountingShortBreak,
      setIsCounting: setIsCountingShortBreak,
      finish: () => {
        play(finishBreakSound)
        /* notify(finishBreakNotificationTitle, finishBreakNotificationBody) */
        setSelectedTab('POMODORO')
      }
    },
    LONG_BREAK: {
      totalTime: 900,
      isCounting: isCountingLongBreak,
      setIsCounting: setIsCountingLongBreak,
      finish: () => {
        play(finishBreakSound)
        /* notify(finishBreakNotificationTitle, finishBreakNotificationBody) */
        setSelectedTab('POMODORO')
      }
    }
  }

  const { totalTime, isCounting, setIsCounting, finish } = mapper[selectedTab]

  const { formatTimeForTimer } = useFormatting()

  const [time, setTime] = useState<number>(totalTime)

  const resetTime = useCallback(() => {
    setIsCounting(false)

    setTime(totalTime)

    setShowButtons(false)
  }, [totalTime, setIsCounting, setShowButtons])

  useEffect(() => {
    resetTime()
  }, [resetTime])

  const handleReset = useCallback(() => {
    play(resetSound)
    resetTime()
  }, [play, resetTime])

  const handleStartStop = useCallback(() => {
    play(isCounting ? stopSound : startSound)

    setIsCounting(!isCounting)

    setShowButtons(true)
  }, [setIsCounting, setShowButtons, isCounting])

  useEffect(() => {
    let interval = null

    if (isCounting) {
      interval = setInterval(() => {
        setTime((currTime) => currTime - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isCounting])

  const onFinish = useCallback(() => {
    finish()

    resetTime()
  }, [resetTime, finish])

  const hasTimeEnded = useCallback(() => time === 0, [time])

  useEffect(() => {
    if (hasTimeEnded()) {
      onFinish()
    }
  }, [hasTimeEnded, onFinish])

  return (
    <S.Wrapper>
      <S.Counter>{formatTimeForTimer(time)}</S.Counter>

      <S.ButtonsWrapper center={!showButtons}>
        {showButtons && (
          <Button label="Reset" type="button" onClick={() => handleReset()} />
        )}

        <Button
          label={isCounting ? 'Stop' : 'Start'}
          type="button"
          onClick={() => handleStartStop()}
        />

        {showButtons && (
          <Button label="Finish" type="button" onClick={() => onFinish()} />
        )}
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default PomodoroCounter
