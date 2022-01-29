import {
  date,
  title,
  description,
  body
} from '../../posts/how-to-automate-component-creation-in-react.json'

import ReactMarkdown from 'react-markdown'

export default function test() {
  return <ReactMarkdown>{body}</ReactMarkdown>
}
