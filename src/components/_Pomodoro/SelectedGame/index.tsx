import Image from 'next/image'

import * as S from './styles'

const SelectedGame = () => {
  return (
    <S.Wrapper>
      <S.GameIcon onClick={() => alert('Coming soon: Other games')}>
        <Image layout="fill" src="/img/pomodoro/gta-iv.png" alt="" />
      </S.GameIcon>
      <S.SelectedGame>Selected Game: GTA IV</S.SelectedGame>
    </S.Wrapper>
  )
}

export default SelectedGame
