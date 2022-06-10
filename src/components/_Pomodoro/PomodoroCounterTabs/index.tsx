import { Tabs } from 'contexts/pomodoro'

import * as S from './styles'

type PomodoroCounterTabsProps = {
  selectedTab: Tabs
  changeTab: (tab: Tabs) => void
}

const PomodoroCounterTabs = ({
  selectedTab,
  changeTab
}: PomodoroCounterTabsProps) => (
  <S.Wrapper>
    <S.Tab
      selected={selectedTab === 'POMODORO'}
      onClick={() => changeTab('POMODORO')}
    >
      <S.Label>Pomodoro</S.Label>
    </S.Tab>
    <S.Tab
      selected={selectedTab === 'SHORT_BREAK'}
      onClick={() => changeTab('SHORT_BREAK')}
    >
      <S.Label>Short Break</S.Label>
    </S.Tab>
    <S.Tab
      selected={selectedTab === 'LONG_BREAK'}
      onClick={() => changeTab('LONG_BREAK')}
    >
      <S.Label>Long Break</S.Label>
    </S.Tab>
  </S.Wrapper>
)

export default PomodoroCounterTabs
