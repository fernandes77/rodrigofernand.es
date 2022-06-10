import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

type TabProps = {
  selected?: boolean
}

export const Tab = styled.section<TabProps>`
  ${({ theme, selected }) => css`
    flex: 1;
    padding: 1rem 0;
    cursor: pointer;
    background-color: ${theme.colors.sidebarBg};

    ${selected &&
    css`
      background-color: ${theme.colors.card};
      box-shadow: 0 1px 0 ${theme.colors.primary} inset;
    `}

    ${!selected &&
    css`
      &:hover {
        background-color: ${theme.colors.mainBg};
      }
    `}
  `}
`

export const Label = styled.h1`
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
`
