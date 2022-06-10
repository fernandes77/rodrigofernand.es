import { useContext } from 'react'

import Tomato from 'components/Tomato'

import PomodoroContext from 'contexts/pomodoro'

import * as S from './styles'

const TomatoList = () => {
  const { completedPomodoros, isCountingPomodoro } = useContext(PomodoroContext)

  return (
    <S.Wrapper>
      {[...Array(completedPomodoros)].map((id, key) => (
        <Tomato key={key} completed />
      ))}

      {isCountingPomodoro && <Tomato />}
    </S.Wrapper>
  )
}

export default TomatoList
