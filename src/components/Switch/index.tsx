import { useEffect, useState } from 'react'
import * as S from './styles'

type SwitchProps = {
  value: boolean
  onToggle: (value: boolean) => void
}

const Switch = (props: SwitchProps) => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false)

  useEffect(() => {
    setIsTurnedOn(props.value)
  }, [props.value])

  const onToggle = () => {
    const nextState = !isTurnedOn

    props.onToggle(nextState)
  }

  return (
    <S.Wrapper onClick={() => onToggle()}>
      <S.Circle isTurnedOn={isTurnedOn}>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_102_3)">
            <circle cx="12" cy="10.5" r="10" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d_102_3"
              x="0"
              y="0.5"
              width="22"
              height="22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_102_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_102_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </S.Circle>
      <S.Background isTurnedOn={isTurnedOn}>
        <svg
          width="36"
          height="15"
          viewBox="0 0 36 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="36" height="14" rx="7" fill="#323742" />
        </svg>
      </S.Background>
    </S.Wrapper>
  )
}

export default Switch
