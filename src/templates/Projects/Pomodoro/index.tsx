import Container from 'components/Container'
import PomodoroBox from 'components/_Pomodoro/PomodoroBox'
import TomatoList from 'components/_Pomodoro/TomatoList'

import PomodoroContext from 'contexts/pomodoro'

import usePomodoro from 'hooks/usePomodoro'

import * as S from './styles'

const Pomodoro = () => (
  <PomodoroContext.Provider value={usePomodoro()}>
    <Container>
      <S.Wrapper>
        <TomatoList />

        <S.PomodoroCounterWrapper>
          <PomodoroBox />
        </S.PomodoroCounterWrapper>
      </S.Wrapper>
    </Container>
  </PomodoroContext.Provider>
)

export default Pomodoro
