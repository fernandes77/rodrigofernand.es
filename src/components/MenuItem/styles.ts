import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  active: boolean
}

export const wrapperModifiers = {
  active: (theme: DefaultTheme) => css`
    box-shadow: inset 1rem 0 0 0 ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, active }) => css`
    position: relative;
    width: 100%;
    color: ${theme.colors.grey};
    transition: ${theme.transition.default};

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.greyActive};
    }

    ${active && wrapperModifiers.active(theme)}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
