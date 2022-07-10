import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  disabled?: boolean
}

const Button = ({
  type,
  loading = false,
  onClick,
  disabled = false,
  children
}: ButtonProps) => (
  <S.Wrapper type={type} onClick={onClick} disabled={disabled || loading}>
    {children}
  </S.Wrapper>
)

export default Button
