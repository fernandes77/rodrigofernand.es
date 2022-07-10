import { useForm } from '@formspree/react'

import Button from 'components/Button'
import Input from 'components/Input'
import Textarea from 'components/Textarea'

import * as S from './styles'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xoqrveed')

  if (state.submitting) {
    return <p>Loading...</p>
  }

  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InputSplit>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required={true}
          maxLength={64}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required={true}
          maxLength={64}
        />
      </S.InputSplit>
      <Input
        type="text"
        name="note"
        id="note"
        placeholder="Subject"
        required={true}
        maxLength={64}
      />
      <Textarea
        name="message"
        id="message"
        placeholder="Message"
        required={true}
        maxLength={512}
      />
      <S.SubmitButton>
        <Button type="submit" loading={state.submitting}>
          Submit
        </Button>
      </S.SubmitButton>
    </S.Wrapper>
  )
}

export default ContactForm
