import Container from 'components/Container'
import PomodoroBox from 'components/_Pomodoro/PomodoroBox'
import PomodoroNotifications from 'components/_Pomodoro/PomodoroNotifications'
import SelectedGame from 'components/_Pomodoro/SelectedGame'
import TomatoList from 'components/_Pomodoro/TomatoList'

import PomodoroContext from 'contexts/pomodoro'

import usePomodoro from 'hooks/usePomodoro'
import useNotifications from 'hooks/useNotifications'

import * as S from './styles'

const Pomodoro = () => {
  const { checkIOS } = useNotifications()

  return (
    <PomodoroContext.Provider value={usePomodoro()}>
      <Container>
        <S.Wrapper>
          <S.NotificationsWrapper>
            {!checkIOS() && <PomodoroNotifications />}
          </S.NotificationsWrapper>

          <S.GameWrapper>
            <SelectedGame />
          </S.GameWrapper>

          <S.PomodoroCounterWrapper>
            <PomodoroBox />
          </S.PomodoroCounterWrapper>

          <TomatoList />
        </S.Wrapper>
      </Container>
    </PomodoroContext.Provider>
  )
}

export default Pomodoro
