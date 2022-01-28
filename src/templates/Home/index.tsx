import Link from 'next/link'

import Container from 'components/Container'
import * as S from './styles'

const Home = () => (
  <Container>
    <S.Wrapper>
      <S.Introduction>
        Hi, my name is
        <span> Rodrigo Fernandes.</span>
        <span> I bring ideas to life with code.</span>
      </S.Introduction>
      <S.Description>
        <p>
          Born and based in Brasília, Brazil, I am a Front-End Developer
          specialized in React and NextJS.
        </p>
        <p>
          I have worked at{' '}
          <a href="https://lenscope.com.br" target="_blank" rel="noreferrer">
            Lenscope
          </a>{' '}
          and currently I&apos;m working at{' '}
          <a href="https://intuix.com.br" target="_blank" rel="noreferrer">
            Intuix
          </a>
          , a company that offers International Standards certifications such as
          ISO 9001 through technology.
        </p>
        <p>
          I&apos;m very passionate about web development because you can
          seamlessly learn a tech tool online, create a project and show it to
          the world! I believe the web should be a free place for people to show
          their work. I also like to work with teams and apply coding principles
          like SOLID, Clean Architecture and TDD to write readable and
          maintainable code.
        </p>
      </S.Description>
    </S.Wrapper>
  </Container>
)

export default Home
