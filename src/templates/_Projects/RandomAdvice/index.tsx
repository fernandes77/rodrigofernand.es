import Container from 'components/Container'
import { RotateCw } from 'components/Icons/RotateCw'

import { useRandomAdvice } from 'hooks/useRandomAdvice'

import theme from 'styles/theme'
import * as S from './styles'

const RandomAdvice = () => {
  const { advice, loading, onShowAdvice } = useRandomAdvice()

  return (
    <Container>
      <S.Wrapper>
        <S.Center>
          <S.Heading>Random Advice Generator</S.Heading>
          <S.AdviceCard>
            <S.Advice>"{advice}"</S.Advice>
            <S.Line />
            <S.Refresh
              type="button"
              disabled={loading}
              onClick={() => onShowAdvice()}
            >
              <i>
                <RotateCw color={theme.colors.mainBg} />
              </i>
            </S.Refresh>
          </S.AdviceCard>
        </S.Center>
      </S.Wrapper>
    </Container>
  )
}

export default RandomAdvice
