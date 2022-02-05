import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme, isOpen }) => css`
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
    z-index: 20;

    @media (max-width: 1024px) {
      left: -30rem;
      transition: ${theme.transition.slow};

      ${isOpen &&
      css`
        transform: translateX(30rem);
      `}
    }
  `}
`

export const OpenSidebar = styled.button`
  ${({ theme }) => css`
    display: none;

    @media (max-width: 1024px) {
      display: block;
      position: fixed;
      z-index: 30;
      top: 1.2rem;
      right: 1.2rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 0;
      background-color: ${theme.colors.white};
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      & > div {
        width: 1.6rem;
        height: 1.6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;

        & > span {
          width: 100%;
          height: 2px;
          background-color: ${theme.colors.mainBg};
        }
      }
    }
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

export const Overlay = styled.div`
  ${({ isOpen }) => css`
    display: none;
    ${isOpen &&
    css`
      display: block;
    `}
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: #000000cc;
  `}
`
