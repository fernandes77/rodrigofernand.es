import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 4rem;
  }
`

export const NotificationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

export const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

export const PomodoroCounterWrapper = styled.div`
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
`
