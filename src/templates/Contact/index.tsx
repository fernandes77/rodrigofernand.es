import Container from 'components/Container'
import ContactForm from 'components/ContactForm'

import * as S from './styles'

const Contact = () => (
  <Container>
    <S.Wrapper>
      <S.Contact>
        <h1>Say Hi!</h1>
        <p>
          Got a project? Have any questions? Just want to say &quot;good
          day&quot;? Feel free to get in touch through the form below. Look
          forward to hearing from you!
        </p>
        <ContactForm />
      </S.Contact>
    </S.Wrapper>
  </Container>
)

export default Contact
