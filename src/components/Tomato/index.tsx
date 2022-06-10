import * as S from './styles'

export type TomatoProps = {
  completed?: boolean
}

const Tomato = ({ completed = false }) => (
  <S.Wrapper completed={completed}>
    <svg
      width="60"
      height="52"
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M59.4331 24.623C59.4331 39.542 46.1732 51.636 29.8172 51.636C13.4592 51.636 0.202148 39.542 0.202148 24.623C0.202148 12.702 7.35615 3.16202 19.4381 0.952018C25.2601 -0.111982 29.8172 4.44402 29.8172 4.44402C29.8172 4.44402 34.0141 0.0910191 39.5791 0.864019C51.2961 2.49102 59.4331 11.568 59.4331 24.623Z" />
    </svg>
  </S.Wrapper>
)

export default Tomato
