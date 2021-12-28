import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    & > input,
    & > textarea {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const InputSplit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > input {
    width: 49%;
  }
`

export const SubmitButton = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    & > button {
      width: 25%;
    }
  `}
`
