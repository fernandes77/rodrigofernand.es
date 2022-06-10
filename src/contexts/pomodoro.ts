import { createContext } from 'react'

export type Tabs = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'

type PomodoroContext = {
  completedPomodoros: number
  setCompletedPomodoros: React.Dispatch<React.SetStateAction<number>>
  isCountingPomodoro: boolean
  setIsCountingPomodoro: React.Dispatch<React.SetStateAction<boolean>>
  isCountingShortBreak: boolean
  setIsCountingShortBreak: React.Dispatch<React.SetStateAction<boolean>>
  isCountingLongBreak: boolean
  setIsCountingLongBreak: React.Dispatch<React.SetStateAction<boolean>>
  onFinishPomodoro: () => void
  selectedTab: Tabs
  setSelectedTab: React.Dispatch<React.SetStateAction<Tabs>>
}

export const initialPomodoro = {
  completedPomodoros: 0,
  setCompletedPomodoros: () => {},
  isCountingPomodoro: false,
  setIsCountingPomodoro: () => {},
  isCountingShortBreak: false,
  setIsCountingShortBreak: () => {},
  isCountingLongBreak: false,
  setIsCountingLongBreak: () => {},
  onFinishPomodoro: () => {},
  selectedTab: 'POMODORO' as Tabs,
  setSelectedTab: () => {}
}

const PomodoroContext = createContext<PomodoroContext>(initialPomodoro)

export default PomodoroContext
