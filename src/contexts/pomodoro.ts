import { createContext } from 'react'

export type Tabs = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'

export type Games = 'GTA_IV'

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
  selectedGame: Games
  setSelectedGame: React.Dispatch<React.SetStateAction<Games>>
}

export const initialPomodoro: PomodoroContext = {
  completedPomodoros: 0,
  setCompletedPomodoros: () => {},
  isCountingPomodoro: false,
  setIsCountingPomodoro: () => {},
  isCountingShortBreak: false,
  setIsCountingShortBreak: () => {},
  isCountingLongBreak: false,
  setIsCountingLongBreak: () => {},
  onFinishPomodoro: () => {},
  selectedTab: 'POMODORO',
  setSelectedTab: () => {},
  selectedGame: 'GTA_IV',
  setSelectedGame: () => {}
}

const PomodoroContext = createContext<PomodoroContext>(initialPomodoro)

export default PomodoroContext
