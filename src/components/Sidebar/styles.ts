import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${theme.grid.sidebar};
    background-color: ${theme.colors.sidebarBg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.xxlarge} 0;
  `}
`

export const LogoWrapper = styled.div`
  height: 16rem;
  text-align: center;
`

export const Logo = styled.div``

export const Name = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const Title = styled.small`
  ${({ theme }) => css`
    display: block;
    font-weight: ${theme.font.light};
  `}
`

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 0 6rem;
  height: 16rem;
`
